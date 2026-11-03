import "../styles/therapeuticIntro.css";
import therapeuticImage from "../assets/therapeuticIntroImg.png";

export default function TherapeuticIntro() {
  return (
    <section className="therapeutic-intro-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="therapeutic-content">
              <div className="therapeutic-heading-wrapper">
                <span className="therapeutic-subtitle">
                  Our Therapeutic Expertise
                </span>

                <div className="therapeutic-line"></div>
              </div>

              <h2 className="therapeutic-title">
                Delivering
                <span> Better Health</span>
                <br />
                Through Science
              </h2>

              <p className="therapeutic-description">
                At Forwell Pharmaceuticals, we focus on developing and
                delivering trusted pharmaceutical solutions across multiple
                therapeutic specialties. Our commitment to quality
                manufacturing, scientific innovation, and patient-centric care.
              </p>

              <p className="therapeutic-description">
                Our expanding portfolio is designed to improve treatment
                outcomes while meeting the highest standards of safety,
                efficacy, and regulatory compliance.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="therapeutic-image-wrapper">
              <img
                src={therapeuticImage}
                alt="Therapeutic Expertise"
                className="img-fluid therapeutic-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
