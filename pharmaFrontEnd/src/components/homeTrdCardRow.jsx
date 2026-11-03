import "../styles/homeTrdCardRow.css";

export default function ThirdCardRow() {
  return (
    <div className="stats-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 col-6 stat-item">
            <i className="bi bi-capsule-pill stat-icon"></i>

            <h2 className="trdCardHead">150+</h2>

            <p className="trdCardPara">Quality Products</p>
          </div>

          <div className="col-lg-3 col-md-6 col-6 stat-item">
            <i className="bi bi-people stat-icon"></i>

            <h2 className="trdCardHead">500+</h2>

            <p className="trdCardPara">Happy Associates</p>
          </div>

          <div className="col-lg-3 col-md-6 col-6 stat-item">
            <i className="bi bi-globe stat-icon"></i>

            <h2 className="trdCardHead">20+</h2>

            <p className="trdCardPara">Countries Presence</p>
          </div>

          <div className="col-lg-3 col-md-6 col-6">
            <i className="bi bi-heart stat-icon"></i>

            <h2 className="trdCardHead">Millions</h2>

            <p className="trdCardPara">Lives Touched</p>
          </div>
        </div>
      </div>
    </div>
  );
}
