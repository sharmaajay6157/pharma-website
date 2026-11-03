import "../styles/productsHeroSEc.css";
// import products from "../components/productCards";
import ProductCardsLayout from "../components/productCardsLayout"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function ProductsHeroSec() {
  const navigate = useNavigate();
   const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {

  async function loadProducts() {

    try {

      const data = await getProducts();

      setProducts(data);

    } catch (error) {

      console.error("Error loading products:", error);

    } finally {

      setLoading(false);

    }

  }

  loadProducts();

}, []);

if (loading) {
  return (
    <div className="container py-5 text-center">
      <p>Loading products...</p>
    </div>
  );
}

  return (
    <div className="container-fluid py-5 hero-section">
      <div className="container">
        <div className="row g-4">
          {/* Sidebar */}

          <div className="col-12 col-md-4 col-lg-3">
            <div className="sidebar">
              {/* Search */}

              <h5 className="sidebar-heading">Search Products</h5>

              <div className="input-group search-box mb-4">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search medicine..."
                />

                <span className="input-group-text bg-white border-0">
                  <i className="bi bi-search"></i>
                </span>
              </div>

              {/* Categories */}

              <h5 className="sidebar-heading">Categories</h5>

              <ul className="list-unstyled sidebar-list">
                <li className="active">
                  <i className="bi bi-record-circle-fill"></i>
                  All Products
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>
                  Tablets
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>
                  Capsules
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>
                  Injections
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>
                  Syrups
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>
                  Dry Syrups
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>
                  Drops
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>
                  Ointments
                </li>
              </ul>

              <hr />

              {/* Therapeutic Areas */}

              <h5 className="sidebar-heading">Therapeutic Areas</h5>

              <ul className="list-unstyled sidebar-list">
                <li>
                  <i className="bi bi-record-circle"></i>Anti Infectives
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>Cardiovascular
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>Gastrointestinal
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>Pain Management
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>Vitamins & Minerals
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>Respiratory
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>Dermatology
                </li>

                <li>
                  <i className="bi bi-record-circle"></i>And More
                </li>
              </ul>

              {/* Contact Card */}

              <div className="help-card">
                <i className="bi bi-headset"></i>

                <h6>Need Help?</h6>

                <p>Our expert team is always ready to help you.</p>

                <button
                  className="btn btn-danger rounded-pill"
                  onClick={() => navigate("/aboutUs#contact-form")}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Right Hero Section */}

          <div className="col-12 col-md-8 col-lg-9">
            {/* Your Hero Banner / Products will come here */}
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-4">
              <div>
                <h2 className="hero-title">
                  Our Pharmaceutical <span>Products</span>
                </h2>

                <p className="hero-subtitle">
                  High quality products for a healthier world
                </p>
              </div>

              <div className="mt-3 mt-lg-0">
                <select className="form-select sort-dropdown">
                  <option>Sort By: A - Z</option>
                  <option>A - Z</option>
                  <option>Z - A</option>
                </select>
              </div>
            </div>

            {/* Products */}

            <div className="row g-1">
              {products.map((product) => (
                <div className="col-sm-6 col-lg-4 col-xl-4" key={product._id}>
                  
                  <ProductCardsLayout product={product} />


                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsHeroSec;
