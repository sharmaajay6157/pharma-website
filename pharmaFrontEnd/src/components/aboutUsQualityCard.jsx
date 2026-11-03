import "../styles/aboutUsQualityCard.css";
import qualityImage from "../assets/labWorker.png";
import whoLogo from "../assets/whoLogo.png";
import isoLogo from "../assets/whoLogo.png";
import glpLogo from "../assets/whoLogo.png";
import fdaLogo from "../assets/whoLogo.png";

function AboutUsQualityCard() {
  return (
    <section className="about-quality-section ">
      <div className="container">
        <div className="row about-quality-row ">
          {/* Left Image */}

          <div className="col-lg-6 about-quality-image-column">
            <div className="about-quality-image-wrapper">
              <img
                src={qualityImage}
                alt="Quality Laboratory"
                className="about-quality-image"
              />
            </div>
          </div>

          {/* Right Content */}

          <div className="col-lg-6 about-quality-content-column">
            <p className="about-quality-small-heading">QUALITY YOU CAN TRUST</p>

            <div className="about-quality-line"></div>

            <h2 className="about-quality-heading">
              Quality is at the Heart
              <br />
              of <span>Everything</span> We Do
            </h2>

            <p className="about-quality-description">
              We follow stringent quality control measures at every stage of
              manufacturing to ensure safe, effective and reliable products.
            </p>

            <div className="row quality-certification-row">
              <div className="col-6 col-md-3 quality-card-column">
                <div className="quality-card">
                  <img src={whoLogo} alt="WHO GMP" />
                  <h6>WHO GMP</h6>
                  <p>Certified</p>
                </div>
              </div>

              <div className="col-6 col-md-3 quality-card-column">
                <div className="quality-card">
                  <img src={isoLogo} alt="ISO" />
                  <h6>ISO 9001:2015</h6>
                  <p>Certified</p>
                </div>
              </div>

              <div className="col-6 col-md-3 quality-card-column">
                <div className="quality-card">
                  <img src={glpLogo} alt="GLP" />
                  <h6>GLP</h6>
                  <p>Certified</p>
                </div>
              </div>

              <div className="col-6 col-md-3 quality-card-column">
                <div className="quality-card">
                  <img src={fdaLogo} alt="FDA" />
                  <h6>India FDA</h6>
                  <p>Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsQualityCard;
