import { useState } from "react";
import "./../styles/checkout.css";

import paracetamol1 from "../assets/paracetamol1.jpg";
import paracetamol from "../assets/paracetamol.jpg";

function Checkout() {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: 120,
      image: paracetamol1,
      quantity: 1
    },
    {
      id: 2,
      name: "Paracetamol Tablets",
      price: 180,
      image: paracetamol,
      quantity: 2
    }
  ]);

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const gstRate = 18;


  // Increase quantity
  function increaseQuantity(id) {

    setCartItems(function (items) {

      return items.map(function (item) {

        if (item.id === id) {

          return {
            ...item,
            quantity: item.quantity + 1
          };

        }

        return item;

      });

    });
  }


  // Decrease quantity
  function decreaseQuantity(id) {

    setCartItems(function (items) {

      return items
        .map(function (item) {

          if (item.id === id) {

            return {
              ...item,
              quantity: item.quantity - 1
            };

          }

          return item;

        })
        .filter(function (item) {

          return item.quantity > 0;

        });

    });
  }


  // Calculate MRP total
  let mrpTotal = 0;

  cartItems.forEach(function (item) {

    mrpTotal =
      mrpTotal + (item.price * item.quantity);

  });


  // Calculate GST
  const gstAmount = (mrpTotal * gstRate) / 100;


  // Calculate final amount
  const totalAmount = mrpTotal + gstAmount;


  // Pay button
  function handlePayNow() {

    if (cartItems.length === 0) {

      alert("Your cart is empty.");
      return;

    }

    alert(
      "Payment Method: " +
      paymentMethod.toUpperCase() +
      "\nTotal Amount: ₹" +
      totalAmount.toFixed(2)
    );
  }


  return (
    <main className="checkout-page">

      {/* =========================
          CHECKOUT HEADER
      ========================== */}

      <section className="checkout-header">

        <div className="container">

          <div className="checkout-header-content">

            <h1 className="checkout-title">
              Checkout
            </h1>

            <p className="checkout-subtitle">
              Review your order and complete your purchase
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CHECKOUT CONTENT
      ========================== */}

      <section className="checkout-section">

        <div className="container">

          <div className="checkout-layout">


            {/* =========================
                LEFT SIDE
            ========================== */}

            <div className="checkout-products">

              <div className="checkout-card">

                <div className="checkout-card-header">

                  <h2 className="checkout-card-title">
                    Selected Products
                  </h2>

                  <span className="checkout-item-count">
                    {cartItems.length} Items
                  </span>

                </div>


                {/* Empty Cart */}

                {cartItems.length === 0 && (

                  <div className="empty-cart">

                    <i className="bi bi-cart-x empty-cart-icon"></i>

                    <p>
                      Your cart is empty.
                    </p>

                  </div>

                )}


                {/* Products */}

                {cartItems.length > 0 && (

                  <div className="checkout-items">

                    {cartItems.map(function (item) {

                      const itemTotal =
                        item.price * item.quantity;


                      return (

                        <div
                          className="checkout-item"
                          key={item.id}
                        >


                          {/* Product Image */}

                          <div className="product-image-box">

                            <img
                              src={item.image}
                              alt={item.name}
                              className="checkout-product-image"
                            />

                          </div>


                          {/* Product Details */}

                          <div className="product-details">

                            <h3 className="product-name">
                              {item.name}
                            </h3>

                            <p className="product-mrp">
                              MRP: ₹{item.price.toFixed(2)}
                            </p>


                            {/* Quantity */}

                            <div className="quantity-area">

                              <span className="quantity-label">
                                Quantity
                              </span>


                              <div className="quantity-controls">

                                <button
                                  type="button"
                                  className="quantity-button"
                                  onClick={function () {
                                    decreaseQuantity(item.id);
                                  }}
                                >
                                  −
                                </button>


                                <span className="quantity-value">
                                  {item.quantity}
                                </span>


                                <button
                                  type="button"
                                  className="quantity-button"
                                  onClick={function () {
                                    increaseQuantity(item.id);
                                  }}
                                >
                                  +
                                </button>

                              </div>

                            </div>

                          </div>


                          {/* Product Total */}

                          <div className="product-total">

                            <span className="product-total-label">
                              Total
                            </span>

                            <strong className="product-total-price">
                              ₹{itemTotal.toFixed(2)}
                            </strong>

                          </div>

                        </div>

                      );

                    })}

                  </div>

                )}

              </div>

            </div>


            {/* =========================
                RIGHT SIDE
            ========================== */}

            <div className="checkout-summary-wrapper">

              <div className="checkout-summary">


                <h2 className="summary-title">
                  Bill Summary
                </h2>


                {/* MRP */}

                <div className="bill-row">

                  <span className="bill-label">
                    MRP Total
                  </span>

                  <span className="bill-value">
                    ₹{mrpTotal.toFixed(2)}
                  </span>

                </div>


                {/* GST */}

                <div className="bill-row">

                  <span className="bill-label">
                    GST (18%)
                  </span>

                  <span className="bill-value">
                    ₹{gstAmount.toFixed(2)}
                  </span>

                </div>


                <div className="bill-divider"></div>


                {/* Final Total */}

                <div className="total-row">

                  <span className="total-label">
                    Total Bill
                  </span>

                  <strong className="total-value">
                    ₹{totalAmount.toFixed(2)}
                  </strong>

                </div>


                {/* =========================
                    PAYMENT METHOD
                ========================== */}

                <div className="payment-section">

                  <h3 className="payment-title">
                    Pay From
                  </h3>


                  {/* UPI */}

                  <label className="payment-option">

                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === "upi"}
                      onChange={function (event) {
                        setPaymentMethod(event.target.value);
                      }}
                    />

                    <span className="payment-content">

                      <i className="bi bi-phone payment-icon"></i>

                      <span>
                        UPI
                      </span>

                    </span>

                  </label>


                  {/* Card */}

                  <label className="payment-option">

                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={function (event) {
                        setPaymentMethod(event.target.value);
                      }}
                    />

                    <span className="payment-content">

                      <i className="bi bi-credit-card payment-icon"></i>

                      <span>
                        Credit / Debit Card
                      </span>

                    </span>

                  </label>


                  {/* Pay Now */}

                  <button
                    type="button"
                    className="pay-now-button"
                    onClick={handlePayNow}
                  >

                    <i className="bi bi-lock-fill"></i>

                    Pay Now ₹{totalAmount.toFixed(2)}

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Checkout;


// in this page we are hardcoding the products selected ,but in project i want the choosen products on the product page to come here.there are 2 btns one is buy now btn which will take the single choosen  product to the checkout page,other btn is add to cart btn which will add the particular product to the cart page and then it moves to the checkout page from that cart page.suggest ways to do it in proper way in react