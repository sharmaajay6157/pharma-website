import "../styles/newNavbar.css";
import logopharma from "../assets/logo.png";

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
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Therapeutic Areas
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Quality
              </a>
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
