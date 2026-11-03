import "../styles/homeFirstCardRow.css";

export default function FirstCardRow() {
  return (
    <div className="container feature-container">
      <div className="feature-box">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 feature-item">
            <div className="d-flex">
              <div className="icon-box">
                <i className="bi bi-shield-check"></i>
              </div>

              <div className="ms-3">
                <h5>Quality Assured</h5>
                <p>We maintain the highest standards in quality and safety.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 feature-item">
            <div className="d-flex">
              <div className="icon-box">
                <i className="bi bi-search"></i>
              </div>

              <div className="ms-3">
                <h5>Research Driven</h5>
                <p>
                  Innovation and science drive our commitment to better health.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 feature-item">
            <div className="d-flex">
              <div className="icon-box">
                <i className="bi bi-heart"></i>
              </div>

              <div className="ms-3">
                <h5>Patient Focused</h5>
                <p>Our patients are at the center of everything we do.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 feature-item">
            <div className="d-flex">
              <div className="icon-box">
                <i className="bi bi-globe"></i>
              </div>

              <div className="ms-3">
                <h5>Global Vision</h5>
                <p>Delivering trusted healthcare solutions across the globe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
