import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import "../styles/cart.css";

import NewNavbar from "../components/newNavbar";

import NewFooter from "../components/newFooter";

import {

  createPaymentOrder,

  verifyPayment,

} from "../services/api";

function Cart() {

  const navigate = useNavigate();

  // Load cart from localStorage.

  const [cartItems, setCartItems] = useState(function () {

    const savedCart = localStorage.getItem("cart");

    if (!savedCart) {

      return [];

    }

    try {

      const parsedCart = JSON.parse(savedCart);

      return Array.isArray(parsedCart) ? parsedCart : [];

    } catch (error) {

      console.error("Error reading cart:", error);

      return [];

    }

  });

  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  // Customer details.

  const [customerDetails, setCustomerDetails] = useState({

    name: "",

    email: "",

    address: "",

  });

  const [formErrors, setFormErrors] = useState({});

  const gstRate = 18;

  // Save cart whenever cart items change.

  useEffect(

    function () {

      localStorage.setItem("cart", JSON.stringify(cartItems));

    },

    [cartItems],

  );

  // Increase quantity.

  function increaseQuantity(id) {

    setCartItems(function (items) {

      return items.map(function (item) {

        if (String(item._id) === String(id)) {

          return {

            ...item,

            quantity: Number(item.quantity || 0) + 1,

          };

        }

        return item;

      });

    });

  }

  // Decrease quantity.

  function decreaseQuantity(id) {

    setCartItems(function (items) {

      return items

        .map(function (item) {

          if (String(item._id) === String(id)) {

            return {

              ...item,

              quantity: Number(item.quantity || 0) - 1,

            };

          }

          return item;

        })

        .filter(function (item) {

          return Number(item.quantity) > 0;

        });

    });

  }

  // Remove a product.

  function removeProduct(id) {

    setCartItems(function (items) {

      return items.filter(function (item) {

        return String(item._id) !== String(id);

      });

    });

  }

  // Calculate subtotal.

  function calculateMrpTotal() {

    let total = 0;

    cartItems.forEach(function (item) {

      total +=

        Number(item.price || 0) *

        Number(item.quantity || 0);

    });

    return total;

  }

  const mrpTotal = calculateMrpTotal();

  const gstAmount = (mrpTotal * gstRate) / 100;

  const totalAmount = mrpTotal + gstAmount;

  // Validate customer details.

  function validateCustomerDetails() {

    const errors = {};

    const name = customerDetails.name.trim();

    const email = customerDetails.email.trim();

    const address = customerDetails.address.trim();

    if (!name) {

      errors.name = "Full name is required.";

    } else if (name.length < 2) {

      errors.name = "Name must contain at least 2 characters.";

    } else if (!/^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u.test(name)) {

      errors.name = "Please enter a valid name.";

    }

    if (!email) {

      errors.email = "Email address is required.";

    } else if (

      email.length > 254 ||

      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    ) {

      errors.email = "Please enter a valid email address.";

    }

    if (!address) {

      errors.address = "Delivery address is required.";

    } else if (address.length < 10) {

      errors.address = "Address must contain at least 10 characters.";

    } else if (address.length > 300) {

      errors.address = "Address cannot exceed 300 characters.";

    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;

  }

  // Keep errors updated while the customer types.

  function handleCustomerInputChange(event) {

    const { name, value } = event.target;

    setCustomerDetails(function (previousDetails) {

      return {

        ...previousDetails,

        [name]: value,

      };

    });

    setFormErrors(function (previousErrors) {

      return {

        ...previousErrors,

        [name]: "",

      };

    });

  }

  // Check if all customer fields are valid enough to enable Pay Now.

  const trimmedName = customerDetails.name.trim();

  const trimmedEmail = customerDetails.email.trim();

  const trimmedAddress = customerDetails.address.trim();

  const isCustomerDetailsComplete =

    trimmedName.length >= 2 &&

    trimmedName.length <= 100 &&

    /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u.test(trimmedName) &&

    trimmedEmail.length <= 254 &&

    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) &&

    trimmedAddress.length >= 10 &&

    trimmedAddress.length <= 300;

  // Load the Razorpay Checkout script.

  function loadRazorpayScript() {

    return new Promise(function (resolve) {

      if (window.Razorpay) {

        resolve(true);

        return;

      }

      const script = document.createElement("script");

      script.src =

        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = function () {

        resolve(true);

      };

      script.onerror = function () {

        resolve(false);

      };

      document.body.appendChild(script);

    });

  }

  // Start payment.

  async function handlePayNow() {

    if (cartItems.length === 0) {

      alert("Your cart is empty.");

      return;

    }

    if (isPaymentProcessing) {

      return;

    }

    // Revalidate on click, even if browser state or input is manipulated.

    if (!validateCustomerDetails()) {

      return;

    }

    if (!isCustomerDetailsComplete) {

      return;

    }

    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;

    if (!razorpayKey) {

      alert("Razorpay configuration is missing. Please contact support.");

      return;

    }

    try {

      setIsPaymentProcessing(true);

      // 1. Load Razorpay.

      const razorpayLoaded = await loadRazorpayScript();

      if (!razorpayLoaded) {

        alert(

          "Unable to load Razorpay. Please check your internet connection and try again.",

        );

        setIsPaymentProcessing(false);

        return;

      }

      // 2. Create the order using the existing backend API.

      const orderResponse = await createPaymentOrder({
        amount: totalAmount,
        customerDetails: {
          name: trimmedName,
          email: trimmedEmail,
          address: trimmedAddress,
        },
        products: cartItems,
        subtotal: mrpTotal,
        gstAmount: gstAmount,
        totalAmount: totalAmount,
      });

      if (

        !orderResponse ||

        !orderResponse.success ||

        !orderResponse.order

      ) {

        throw new Error("Unable to create Razorpay order.");

      }

      const razorpayOrder = orderResponse.order;

      // 3. Configure Razorpay Checkout.

      const options = {

        key: razorpayKey,

        amount: razorpayOrder.amount,

        currency: razorpayOrder.currency,

        name: "Forwell Pharmaceuticals",

        description: "Purchase from Forwell Pharmaceuticals",

        order_id: razorpayOrder.id,

        // 4. Verify the payment with the existing backend API.

        handler: async function (response) {

          try {

            const verificationResponse = await verifyPayment({

              razorpay_order_id: response.razorpay_order_id,

              razorpay_payment_id: response.razorpay_payment_id,

              razorpay_signature: response.razorpay_signature,

            });

            if (

              verificationResponse &&

              verificationResponse.success

            ) {

              alert(

                "Payment successful!\n\nPayment ID: " +

                  response.razorpay_payment_id,

              );

              // Clear the cart only after backend verification succeeds.

              setCartItems([]);

              localStorage.removeItem("cart");

              navigate("/products");

            } else {

              alert(

                "Payment was completed, but verification failed. Please contact support.",

              );

            }

          } catch (error) {

            console.error("Payment verification error:", error);

            alert(

              "Payment verification failed. Please contact support.",

            );

          } finally {

            setIsPaymentProcessing(false);

          }

        },

        prefill: {

          name: trimmedName,

          email: trimmedEmail,

          contact: "",

        },

        notes: {

          purpose: "Forwell Pharmaceuticals product purchase",

        },

        theme: {

          color: "#dc2626",

        },

        modal: {

          ondismiss: function () {

            setIsPaymentProcessing(false);

          },

        },

      };

      // 5. Open the payment window.

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {

        console.error(

          "Razorpay payment failed:",

          response.error,

        );

        alert(

          "Payment failed.\n\n" +

            (response.error?.description ||

              "Please try again."),

        );

        setIsPaymentProcessing(false);

      });

      razorpay.open();

    } catch (error) {

      console.error("Payment error:", error);

      alert(

        error.message ||

          "Something went wrong while starting the payment.",

      );

      setIsPaymentProcessing(false);

    }

  }

  return (

    <>

      <NewNavbar />

      <main className="cart-page">

        {/* Cart Header */}

        <section className="cart-header">

          <div className="container">

            <div className="cart-header-content">

              <h1 className="cart-title">Your Cart</h1>

              <p className="cart-subtitle">

                Review your products and complete your purchase

              </p>

            </div>

          </div>

        </section>

        {/* Cart Section */}

        <section className="cart-section">

          <div className="container">

            <div className="row">

              {/* Left Side: Products */}

              <div className="col-lg-8">

                <div className="cart-products">

                  <div className="cart-card">

                    <div className="cart-card-header">

                      <h2 className="cart-card-title">

                        Selected Products

                      </h2>

                      <span className="cart-item-count">

                        {cartItems.length} Items

                      </span>

                    </div>

                    {/* Empty Cart */}

                    {cartItems.length === 0 && (

                      <div className="empty-cart">

                        <i className="bi bi-cart-x empty-cart-icon"></i>

                        <h3>Your cart is empty</h3>

                        <p>

                          Add some products from our products page.

                        </p>

                        <button

                          type="button"

                          className="continue-shopping-button"

                          onClick={function () {

                            navigate("/products");

                          }}

                        >

                          <i className="bi bi-arrow-left"></i>

                          Continue Shopping

                        </button>

                      </div>

                    )}

                    {/* Cart Products */}

                    {cartItems.length > 0 && (

                      <div className="cart-items">

                        {cartItems.map(function (item) {

                          const itemTotal =

                            Number(item.price || 0) *

                            Number(item.quantity || 0);

                          return (

                            <div

                              className="cart-item"

                              key={item._id}

                            >

                              <div className="product-image-box">

                                <img

                                  src={item.image}

                                  alt={item.name}

                                  className="cart-product-image"

                                />

                              </div>

                              <div className="product-details">

                                <h3 className="product-name">

                                  {item.name}

                                </h3>

                                <p className="product-category">

                                  {item.category}

                                </p>

                                <p className="product-mrp">

                                  MRP: ₹

                                  {Number(

                                    item.price || 0,

                                  ).toFixed(2)}

                                </p>

                                <div className="quantity-area">

                                  <span className="quantity-label">

                                    Quantity

                                  </span>

                                  <div className="quantity-controls">

                                    <button

                                      type="button"

                                      className="quantity-button"

                                      onClick={function () {

                                        decreaseQuantity(item._id);

                                      }}

                                      aria-label="Decrease quantity"

                                    >

                                      <i className="bi bi-dash"></i>

                                    </button>

                                    <span className="quantity-value">

                                      {item.quantity}

                                    </span>

                                    <button

                                      type="button"

                                      className="quantity-button"

                                      onClick={function () {

                                        increaseQuantity(item._id);

                                      }}

                                      aria-label="Increase quantity"

                                    >

                                      <i className="bi bi-plus"></i>

                                    </button>

                                  </div>

                                </div>

                              </div>

                              <div className="product-total">

                                <span className="product-total-label">

                                  Total

                                </span>

                                <strong className="product-total-price">

                                  ₹{itemTotal.toFixed(2)}

                                </strong>

                                <button

                                  type="button"

                                  className="remove-product-button"

                                  onClick={function () {

                                    removeProduct(item._id);

                                  }}

                                >

                                  <i className="bi bi-trash3"></i>

                                  Remove

                                </button>

                              </div>

                            </div>

                          );

                        })}

                      </div>

                    )}

                  </div>

                </div>

              </div>

              {/* Right Side: Bill Summary */}

              <div className="col-lg-4">

                <div className="cart-summary">

                  <h2 className="summary-title">

                    Bill Summary

                  </h2>

                  <div className="bill-row">

                    <span className="bill-label">

                      MRP Total

                    </span>

                    <span className="bill-value">

                      ₹{mrpTotal.toFixed(2)}

                    </span>

                  </div>

                  <div className="bill-row">

                    <span className="bill-label">

                      GST (18%)

                    </span>

                    <span className="bill-value">

                      ₹{gstAmount.toFixed(2)}

                    </span>

                  </div>

                  <div className="bill-divider"></div>

                  <div className="total-row">

                    <span className="total-label">

                      Total Bill

                    </span>

                    <strong className="total-value">

                      ₹{totalAmount.toFixed(2)}

                    </strong>

                  </div>

                  {/* Customer Details */}

                  <div className="customer-details-section">

                    <h3 className="customer-details-title">

                      Delivery Details

                    </h3>

                    <p className="customer-details-description">

                      Enter your details to complete your order.

                    </p>

                    {/* Full Name */}

                    <div className="customer-form-group">

                      <label

                        htmlFor="customer-name"

                        className="customer-form-label"

                      >

                        Full Name{" "}

                        <span className="required-mark">*</span>

                      </label>

                      <input

                        id="customer-name"

                        type="text"

                        name="name"

                        className={`form-control customer-form-input ${

                          formErrors.name ? "is-invalid" : ""

                        }`}

                        placeholder="Enter your full name"

                        value={customerDetails.name}

                        onChange={handleCustomerInputChange}

                        autoComplete="name"

                        maxLength={100}

                        required

                        disabled={isPaymentProcessing}

                        aria-invalid={Boolean(formErrors.name)}

                        aria-describedby={

                          formErrors.name

                            ? "customer-name-error"

                            : undefined

                        }

                      />

                      {formErrors.name && (

                        <div

                          id="customer-name-error"

                          className="invalid-feedback"

                        >

                          {formErrors.name}

                        </div>

                      )}

                    </div>

                    {/* Email Address */}

                    <div className="customer-form-group">

                      <label

                        htmlFor="customer-email"

                        className="customer-form-label"

                      >

                        Email Address{" "}

                        <span className="required-mark">*</span>

                      </label>

                      <input

                        id="customer-email"

                        type="email"

                        name="email"

                        className={`form-control customer-form-input ${

                          formErrors.email ? "is-invalid" : ""

                        }`}

                        placeholder="Enter your email address"

                        value={customerDetails.email}

                        onChange={handleCustomerInputChange}

                        autoComplete="email"

                        maxLength={254}

                        required

                        disabled={isPaymentProcessing}

                        aria-invalid={Boolean(formErrors.email)}

                        aria-describedby={

                          formErrors.email

                            ? "customer-email-error"

                            : undefined

                        }

                      />

                      {formErrors.email && (

                        <div

                          id="customer-email-error"

                          className="invalid-feedback"

                        >

                          {formErrors.email}

                        </div>

                      )}

                    </div>

                    {/* Delivery Address */}

                    <div className="customer-form-group">

                      <label

                        htmlFor="customer-address"

                        className="customer-form-label"

                      >

                        Delivery Address{" "}

                        <span className="required-mark">*</span>

                      </label>

                      <textarea

                        id="customer-address"

                        name="address"

                        className={`form-control customer-form-input customer-address-input ${

                          formErrors.address ? "is-invalid" : ""

                        }`}

                        placeholder="Enter your complete delivery address"

                        value={customerDetails.address}

                        onChange={handleCustomerInputChange}

                        autoComplete="street-address"

                        rows={3}

                        maxLength={300}

                        required

                        disabled={isPaymentProcessing}

                        aria-invalid={Boolean(formErrors.address)}

                        aria-describedby={

                          formErrors.address

                            ? "customer-address-error"

                            : undefined

                        }

                      />

                      {formErrors.address && (

                        <div

                          id="customer-address-error"

                          className="invalid-feedback"

                        >

                          {formErrors.address}

                        </div>

                      )}

                    </div>

                    {/* Pay Now */}

                    <button

                      type="button"

                      className="pay-now-button"

                      onClick={handlePayNow}

                      disabled={

                        cartItems.length === 0 ||

                        isPaymentProcessing ||

                        !isCustomerDetailsComplete

                      }

                    >

                      <i className="bi bi-lock-fill"></i>

                      {isPaymentProcessing

                        ? "Processing..."

                        : "Pay Now ₹" + totalAmount.toFixed(2)}

                    </button>

                    <p className="customer-details-required-note">

                      * All fields are required to proceed with payment.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <NewFooter />

    </>

  );

}

export default Cart;
