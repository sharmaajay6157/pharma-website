import Logo from "../assets/logo.png";
import "../styles/newFooter.css";

export default function Footer() {
  return (
    <footer className="forwell-footer">
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand column */}
          <div className="col-md-6 col-lg-3">
            {/* <Logo height={44} /> */}
            <img
              src={Logo}
              alt="Forwell Logo"
              height={44}
              className="footer-logo"
            />
            <p className="footer-tag mt-2 mb-2 text-forwell fw-semibold">
              For your Wellness
            </p>
            <p className="footer-desc">
              Forwell Pharmaceuticals is committed to health, hope and a better
              tomorrow.
            </p>
            <div className="d-flex gap-2 mt-3">
              <a href="#" className="social-btn">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-btn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="social-btn">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-btn">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-list d-flex flex-column">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Therapeutic Areas</a>
              </li>
              <li>
                <a href="#">Quality</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Therapeutic Areas */}
          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="footer-title">Therapeutic Areas</h6>
            <ul className="footer-list d-flex flex-column">
              <li>
                <a href="#">Anti Infectives</a>
              </li>
              <li>
                <a href="#">Cardiovascular</a>
              </li>
              <li>
                <a href="#">Gastrointestinal</a>
              </li>
              <li>
                <a href="#">Pain Management</a>
              </li>
              <li>
                <a href="#">Vitamins & Minerals</a>
              </li>
              <li>
                <a href="#">Dermatology</a>
              </li>
              <li>
                <a href="#">And More</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-12 col-lg-4">
            <h6 className="footer-title">Contact Us</h6>
            <ul className="footer-list footer-contact d-flex flex-column">
              <li>
                <i className="bi bi-geo-alt-fill addIcon"></i>
                Plot No. XX, Pharma City, Sector XX, Selaqui, Dehradun,
                Uttarakhand, India
              </li>
              <li>
                <i className="bi bi-telephone-fill addIcon"></i> +91 1234567890
              </li>
              <li>
                <i className="bi bi-envelope-fill addIcon"></i>{" "}
                info@forwellpharma.com
              </li>
              <li>
                <i className="bi bi-globe addIcon"></i> www.forwellpharma.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        © 2024 Forwell Pharmaceuticals. All Rights Reserved.
      </div>
    </footer>
  );
}
