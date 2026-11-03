import "../styles/careerWhyJoinForwell.css";
import whyJoinImage from "../assets/whyJoinForwell.png";

export default function WhyJoinForwell() {
  return (
    <section className="why-join-section">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-6 ">
            <div className="why-join-content">
              <h2 className="why-join-title">Why Join Forwell?</h2>

              <div className="why-join-title-line"></div>

              <p className="why-join-intro">
                At Forwell Pharmaceuticals, we believe our people are our
                greatest strength. When you join Forwell, you become part of a
                purpose-driven team dedicated to advancing healthcare through
                innovation, quality, and continuous improvement.
              </p>

              <div className="why-join-list">
                <div className="why-join-item">
                  <i className="bi bi-check-circle-fill"></i>

                  <p>
                    <span>Meaningful Impact:</span> Contribute to innovative
                    healthcare solutions that improve lives across communities.
                  </p>
                </div>

                <div className="why-join-item">
                  <i className="bi bi-check-circle-fill"></i>

                  <p>
                    <span>Growth Opportunities:</span> Access continuous
                    learning, mentoring, and structured career development.
                  </p>
                </div>

                <div className="why-join-item">
                  <i className="bi bi-check-circle-fill"></i>

                  <p>
                    <span>Employee Well-being:</span> Enjoy wellness programs,
                    work-life balance, and a safe workplace.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="why-join-image-wrapper">
              <img
                src={whyJoinImage}
                alt="Why Join Forwell"
                className="img-fluid why-join-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
