
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/productCardsLayout.css";

function ProductCardsLayout({ product }) {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  function addProductToCart() {
    const savedCart = localStorage.getItem("cart");
    let cart = [];

    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          cart = parsedCart;
        }
      } catch (error) {
        console.error("Error reading cart:", error);
        cart = [];
      }
    }

    const existingProduct = cart.find(function (item) {
      return String(item._id) === String(product._id);
    });

    if (existingProduct) {
      existingProduct.quantity =
        Number(existingProduct.quantity || 0) + 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    // Save cart items
    localStorage.setItem("cart", JSON.stringify(cart));

    // Notify the navbar that the cart has changed
    window.dispatchEvent(new Event("cartUpdated"));

    return cart;
  }

  function handleAddToCart() {
    addProductToCart();

    // Show success message
    setShowMessage(true);

    // Hide popup after 3 seconds
    setTimeout(function () {
      setShowMessage(false);
    }, 3000);
  }

  function handleBuyNow() {
    addProductToCart();
    navigate("/cart");
  }

  return (
    <div className="card product-card h-100 w-100">
      <img
        src={product.image}
        className="product-image"
        alt={product.name}
      />

      <div className="product-card-body d-flex flex-column flex-grow-1">
        <span className="text-secondary product-category">
          {product.category}
        </span>

        <h6 className="fw-bold mt-2 product-name">
          {product.name}
        </h6>

        <p className="text-muted small product-description">
          {product.description}
        </p>

        <h6 className="fw-bold mt-auto pt-2">
          <span className="text-danger">Price:</span> ₹{product.price}
        </h6>
      </div>

      <div className="product-card-actions">
        <button
          type="button"
          className="btn btn-outline-danger add-cart-btn"
          onClick={handleAddToCart}
        >
          <i className="bi bi-cart3"></i>
          <span>Add to Cart</span>
        </button>

        <button
          type="button"
          className="btn btn-danger buy-now-btn"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>

      {/* Cart success message */}
      {showMessage && (
        <div className="cart-success-message">
          <i className="bi bi-check-circle-fill"></i>
          <span>{product.name} is added to your cart</span>
        </div>
      )}
    </div>
  );
}

export default ProductCardsLayout;
