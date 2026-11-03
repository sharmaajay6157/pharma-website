import "../styles/navbar.css";
import logopharma from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <img src={logopharma} alt="logo" />
      </div>
      <div className="navbarLinks">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Therapeutic Areas</li>
          <li>Quality</li>
          <li>Career</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="navbarButton">
        <button className="navbtn">
          <i class="fa-solid fa-phone phoneLogo"></i>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
