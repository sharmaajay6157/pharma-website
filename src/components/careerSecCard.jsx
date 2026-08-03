import "../styles/careerSecCard.css";

export default function CareerSecCard() {
  return (
    <section className="career-benefits-section">
      <div className="container">
        <div className="career-benefits-wrapper">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6">
              <div className="career-benefit-card">
                <div className="career-benefit-icon">
                  <i className="bi bi-people"></i>
                </div>

                <div className="career-benefit-content">
                  <h5>Collaborative Culture</h5>

                  <p>
                    Work in a supportive and collaborative environment that
                    encourages new ideas.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="career-benefit-card">
                <div className="career-benefit-icon">
                  <i className="bi bi-stars"></i>
                </div>

                <div className="career-benefit-content">
                  <h5>Competitive Benefits</h5>

                  <p>We offer attractive compensation and employee benefits.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="career-benefit-card">
                <div className="career-benefit-icon">
                  <i className="bi bi-bar-chart-steps"></i>
                </div>

                <div className="career-benefit-content">
                  <h5>Career Advancement</h5>

                  <p>
                    Clear career paths and opportunities to grow with the
                    organization.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="career-benefit-card career-benefit-last">
                <div className="career-benefit-icon">
                  <i className="bi bi-heart-pulse"></i>
                </div>

                <div className="career-benefit-content">
                  <h5>Work-Life Balance</h5>

                  <p>
                    We promote well-being and a healthy balance between work and
                    life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
