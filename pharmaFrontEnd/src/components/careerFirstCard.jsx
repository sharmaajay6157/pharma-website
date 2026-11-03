import "../styles/careerFirstCard.css";

export default function CareerFirstCard() {
  return (
    <section className="career-values-section">
      <div className="container">
        <div className="career-values-wrapper">
          <div className="row g-0">
            <div className="col-lg col-md-6">
              <div className="career-value-item">
                <div className="career-value-icon">
                  <i className="bi bi-people-fill"></i>
                </div>

                <div className="career-value-content">
                  <h5>People First</h5>
                  <p>We foster a culture of respect, inclusion and growth.</p>
                </div>
              </div>
            </div>

            <div className="col-lg col-md-6">
              <div className="career-value-item">
                <div className="career-value-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>

                <div className="career-value-content">
                  <h5>Growth & Learning</h5>
                  <p>We give contineous learning opportunities.</p>
                </div>
              </div>
            </div>

            <div className="col-lg col-md-6">
              <div className="career-value-item">
                <div className="career-value-icon">
                  <i className="bi bi-patch-check"></i>
                </div>

                <div className="career-value-content">
                  <h5>Quality</h5>
                  <p>We are committed to excellence in everything we do.</p>
                </div>
              </div>
            </div>

            <div className="col-lg col-md-12">
              <div className="career-value-item career-value-last">
                <div className="career-value-icon">
                  <i className="bi bi-globe2"></i>
                </div>

                <div className="career-value-content">
                  <h5>Making an Impact</h5>
                  <p>We create a healthier future for communities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
