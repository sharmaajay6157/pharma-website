import "../styles/aboutUsRedBanner.css";

function AboutUsRedBanner() {
  return (
    <section className="about-stats-section ">
      <div className="container ">
        <div className="about-stats-wrapper">
          <div className="row about-stats-row">
            <div className="col-lg-3 col-md-6 about-stat-column">
              <div className="about-stat-item">
                <div className="about-stat-icon">
                  <i className="bi bi-hospital"></i>
                </div>

                <div className="about-stat-content">
                  <h2>150+</h2>
                  <p>Quality Products</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 about-stat-column">
              <div className="about-stat-item">
                <div className="about-stat-icon">
                  <i className="bi bi-people"></i>
                </div>

                <div className="about-stat-content">
                  <h2>500+</h2>
                  <p>Happy Associates</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 about-stat-column">
              <div className="about-stat-item">
                <div className="about-stat-icon">
                  <i className="bi bi-globe"></i>
                </div>

                <div className="about-stat-content">
                  <h2>20+</h2>
                  <p>Countries Presence</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 about-stat-column">
              <div className="about-stat-item stat-item-last">
                <div className="about-stat-icon">
                  <i className="bi bi-heart"></i>
                </div>

                <div className="about-stat-content">
                  <h2>Millions</h2>
                  <p>Lives Touched</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsRedBanner;
