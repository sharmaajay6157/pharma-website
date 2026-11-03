import "../styles/aboutUsMainImg.css";
import aboutHeroImage from "../assets/aboutusMainImg.png";

function AboutUsMainImg() {
  return (
    <section
      className="about-hero-section"
      style={{ backgroundImage: `url(${aboutHeroImage})` }}
    >
      <div className="about-hero-overlay">
        <div className="container about-hero-container">
          <div className="row about-hero-row">
            <div className="col-lg-5 col-md-7 col-12 about-hero-column">
              <div className="about-breadcrumb">
                <span>Home</span>
                <i className="bi bi-chevron-right"></i>
                <span>About Us</span>
              </div>

              <h1 className="about-hero-title">
                About <span>Us</span>
              </h1>

              <p className="about-hero-description">
                Forwell Pharmaceuticals is committed to providing high-quality
                medicines that improve lives and build a healthier tomorrow.
              </p>

              <button className="about-hero-button">
                Get To Know Us
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsMainImg;
