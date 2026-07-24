import "../styles/aboutUSWhoWeAreCard.css";

function WhoWeAreCard() {
  return (
    <section className="about-details-section ">
      <div className="container ">
        <div className="row about-details-row">
          {/* Left Content */}

          <div className="col-lg-5 about-left-column">
            <p className="about-small-heading">WHO WE ARE</p>

            <div className="about-heading-line"></div>

            <h2 className="about-main-heading">
              Dedicated to
              <br />
              <span>Better Healthcare</span>
            </h2>

            <p className="about-description">
              Forwell Pharmaceuticals is a trusted name in the healthcare
              industry. We develop, manufacture and market a wide range of
              quality pharmaceutical formulations.
            </p>

            <p className="about-description">
              Backed by modern infrastructure, a dedicated team and a strong
              distribution network, we are committed to delivering effective and
              affordable medicines.
            </p>

            <button className="about-journey-btn">
              Our Journey
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>

          {/* Right Content */}

          <div className="col-lg-7 about-right-column">
            <div className="row about-card-row">
              <div className="col-md-6 about-card-column">
                <div className="about-info-card">
                  <div className="about-icon-circle">
                    <i className="bi bi-bullseye"></i>
                  </div>

                  <div>
                    <h4>Our Mission</h4>

                    <p>
                      To deliver high-quality, affordable medicines that improve
                      lives and contribute to a healthier society.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 about-card-column">
                <div className="about-info-card">
                  <div className="about-icon-circle">
                    <i className="bi bi-eye"></i>
                  </div>

                  <div>
                    <h4>Our Vision</h4>

                    <p>
                      To be a globally recognized pharmaceutical company known
                      for quality, trust and innovation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 about-card-column">
                <div className="about-info-card">
                  <div className="about-icon-circle">
                    <i className="bi bi-people"></i>
                  </div>

                  <div>
                    <h4>Our Values</h4>

                    <ul className="about-values-list">
                      <li>
                        <i className="bi bi-check-circle"></i> Quality First
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Integrity
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Innovation
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Customer Focus
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 about-card-column">
                <div className="about-info-card">
                  <div className="about-icon-circle">
                    <i className="bi bi-shield-check"></i>
                  </div>

                  <div>
                    <h4>Our Commitment</h4>

                    <p>
                      We are committed to maintaining the highest standards of
                      quality, safety and ethics in everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreCard;
