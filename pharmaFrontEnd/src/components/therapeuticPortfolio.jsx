import "../styles/therapeuticPortfolio.css";

export default function TherapeuticPortfolio() {
  return (
    <section className="therapeutic-portfolio-section">
      <div className="container">
        <div className="therapeutic-portfolio-heading">
          <h2>Why Our Therapeutic Portfolio?</h2>

          <div className="therapeutic-portfolio-line"></div>
        </div>

        <div className="row g-0 ">
          {/* Innovation */}

          <div className="col-lg-3 col-md-6">
            <div className="therapeutic-portfolio-card">
              <div className="therapeutic-portfolio-icon">
                <i className="bi bi-lightbulb"></i>
              </div>

              <div className="therapeutic-portfolio-content">
                <h5>Innovation</h5>

                <p>Research-driven pharmaceutical development.</p>
              </div>
            </div>
          </div>

          {/* Quality */}

          <div className="col-lg-3 col-md-6">
            <div className="therapeutic-portfolio-card">
              <div className="therapeutic-portfolio-icon">
                <i className="bi bi-shield-check"></i>
              </div>

              <div className="therapeutic-portfolio-content">
                <h5>Quality</h5>

                <p>Manufactured under strict GMP quality standards.</p>
              </div>
            </div>
          </div>

          {/* Patient Care */}

          <div className="col-lg-3 col-md-6">
            <div className="therapeutic-portfolio-card">
              <div className="therapeutic-portfolio-icon">
                <i className="bi bi-people"></i>
              </div>

              <div className="therapeutic-portfolio-content">
                <h5>Patient Care</h5>

                <p>Designed to improve patient outcomes and quality of life.</p>
              </div>
            </div>
          </div>

          {/* Global Standards */}

          <div className="col-lg-3 col-md-6">
            <div className="therapeutic-portfolio-card therapeutic-portfolio-last">
              <div className="therapeutic-portfolio-icon">
                <i className="bi bi-globe"></i>
              </div>

              <div className="therapeutic-portfolio-content">
                <h5>Global Standards</h5>

                <p>Aligned with international healthcare practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
