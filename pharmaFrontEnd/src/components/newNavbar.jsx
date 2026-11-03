import "../styles/newNavbar.css";

import logopharma from "../assets/logo.png";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function NewNavbar() {
  const navigate = useNavigate();

  // Get cart items directly when the component initializes
 const [cartItems, setCartItems] = useState(() => {
  try {
    const savedCart = localStorage.getItem("cart");
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    console.error("Error reading cart:", error);
    return [];
  }
});

useEffect(() => {
  function updateCartItems() {
    try {
      const savedCart = localStorage.getItem("cart");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];

      setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
    } catch (error) {
      console.error("Error updating cart indicator:", error);
      setCartItems([]);
    }
  }

  window.addEventListener("cartUpdated", updateCartItems);
  window.addEventListener("storage", updateCartItems);

  return () => {
    window.removeEventListener("cartUpdated", updateCartItems);
    window.removeEventListener("storage", updateCartItems);
  };
}, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={logopharma} alt="Forwell Logo" className="logo" />
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="navbar-collapse justify-content-center"
          id="navbarContent"
        >
          <ul className="navbar-nav">
            {/* Home */}
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>

            {/* About Us */}
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link">
                About Us
              </Link>
            </li>

            {/* Products */}
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>

            {/* Therapeutic Areas */}
            <li className="nav-item">
              <Link to="/therapeuticareas" className="nav-link">
                Therapeutic Areas
              </Link>
            </li>

            {/* Career */}
            <li className="nav-item">
              <Link to="/career" className="nav-link">
                Career
              </Link>
            </li>

            {/* Cart */}
            <li className="nav-item">
              <Link to="/cart" className="nav-link cart-nav-link">
                <span className="cart-icon-wrapper">
                  {/* Bootstrap Cart Icon */}
                  <i className="bi bi-cart3"></i>

                  {/* Yellow indicator when cart is not empty */}
                  {cartItems.length > 0 && (
                    <span className="cart-active-indicator"></span>
                  )}
                </span>
                Cart
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <button
            className="btn nav-btn rounded-4"
            onClick={() => navigate("/aboutUs#contact-form")}
            style={{
              backgroundColor: "#dc2626",
              color: "white",
            }}
          >
            <i className="bi bi-telephone-fill me-2"></i>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NewNavbar;
