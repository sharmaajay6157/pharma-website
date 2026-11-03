import "../styles/homeSecCardRow.css";
import { Link } from "react-router-dom";

export default function SecCardRow() {
  return (
    <div className="container py-4 ">
      <div className="text-center">
        <h6 className="text-danger fw-bold ">OUR PRODUCTS</h6>

        <h1 className="fw-bold">
          Wide Range. <span className="text-danger">Trusted Care.</span>
        </h1>

        <p className="text-secondary">
          We offer a diverse portfolio of pharmaceutical products <br />
          across multiple therapeutic segments.
        </p>
      </div>

      <div className="row mt-5 g-4">
        <div className="col-lg col-md-3 col-6">
          <div className="product-card">
            <i className="bi bi-capsule-pill product-icon"></i>
            <h6>Tablets</h6>
          </div>
        </div>

        <div className="col-lg col-md-3 col-6">
          <div className="product-card">
            <i className="bi bi-capsule product-icon"></i>
            <h6>Capsules</h6>
          </div>
        </div>

        <div className="col-lg col-md-3 col-6">
          <div className="product-card">
            <i className="bi bi-eyedropper product-icon"></i>
            <h6>Injections</h6>
          </div>
        </div>

        <div className="col-lg col-md-3 col-6">
          <div className="product-card">
            <i className="bi bi-prescription2 product-icon"></i>
            <h6>Syrups</h6>
          </div>
        </div>

        <div className="col-lg col-md-3 col-6">
          <div className="product-card">
            <i className="bi bi-cup-straw product-icon"></i>
            <h6>Dry Syrups</h6>
          </div>
        </div>

        <div className="col-lg col-md-3 col-6">
          <div className="product-card">
            <i className="bi bi-bandaid product-icon"></i>
            <h6>Ointments</h6>
          </div>
        </div>

        <div className="col-lg col-md-3 col-6">
          <div className="product-card">
            <i className="bi bi-droplet product-icon"></i>
            <h6>Drops</h6>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <Link to="/products" className="nav-link active">
          <button className="product-btn">
            View All Products
            <i
              className="bi bi-arrow-right ms-2"
              style={{ color: "white" }}
            ></i>
          </button>
        </Link>
      </div>
    </div>
  );
}
