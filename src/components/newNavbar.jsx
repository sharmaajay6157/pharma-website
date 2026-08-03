import "../styles/newNavbar.css";
import logopharma from "../assets/logo.png";
import { Link } from "react-router-dom";

function NewNavbar() {
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
          className=" navbar-collapse justify-content-center"
          id="navbarContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/aboutus" className="nav-link ">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/products" className="nav-link ">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/therapeuticareas" className="nav-link ">
                Therapeutic Areas
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/career" className="nav-link ">
                Career
              </Link>
            </li>
          </ul>

          {/* Contact Button */}

          <button
            className="btn nav-btn rounded-4"
            style={{ backgroundColor: "#dc2626", color: "white" }}
          >
            <i className="fa-solid fa-phone me-2"></i>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NewNavbar;
