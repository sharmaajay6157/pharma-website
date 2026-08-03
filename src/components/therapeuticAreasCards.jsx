import "../styles/therapeuticAreasCards.css";

import cardio from "../assets/cardiology.png";
import diabetes from "../assets/diabetology.png";
import respiratory from "../assets/respiratory.png";
import gastro from "../assets/gastroenterology.png";
import neuro from "../assets/neurology.png";
import nephro from "../assets/nephrology.png";
import derma from "../assets/dermatology.png";
import oncology from "../assets/oncology.png";

export default function TherapeuticAreasCards() {
  return (
    <section className="therapeutic-section">
      <div className="container">
        {/* Heading */}

        <div className="therapeutic-heading">
          <h2>Therapeutic Areas</h2>

          <div className="therapeutic-heading-line"></div>
        </div>

        <div className="row gy-4">
          {/* Card 1 */}

          <div className="col-lg-3 col-md-6">
            <div className="therapeutic-card">
              <img
                src={cardio}
                alt="Cardiology"
                className="therapeutic-card-image img-fluid"
              />

              <div className="therapeutic-card-body">
                <div className="therapeutic-card-header">
                  <div className="therapeutic-card-icon">
                    <i className="bi bi-heart-pulse"></i>
                  </div>

                  <h5>Cardiology</h5>
                </div>

                <p>
                  Comprehensive cardiovascular therapies supporting
                  hypertension, heart failure, lipid management and preventive
                  cardiac care.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}

          <div className="col-lg-3 col-md-6">
            <div className="therapeutic-card">
              <img
                src={diabetes}
                alt="Diabetology"
                className="therapeutic-card-image img-fluid"
              />

              <div className="therapeutic-card-body">
                <div className="therapeutic-card-header">
                  <div className="therapeutic-card-icon">
                    <i className="bi bi-droplet"></i>
                  </div>

                  <h5>Diabetology</h5>
                </div>

                <p>
                  Innovative medicines that help patients achieve better
                  glycemic control and healthier lifestyles.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}

          <div className="col-lg-3 col-md-6">
            <div className="therapeutic-card">
              <img
                src={respiratory}
                alt="Respiratory"
                className="therapeutic-card-image img-fluid"
              />

              <div className="therapeutic-card-body">
                <div className="therapeutic-card-header">
                  <div className="therapeutic-card-icon">
                    <i className="bi bi-lungs"></i>
                  </div>

                  <h5>Respiratory</h5>
                </div>

                <p>
                  Advanced respiratory treatments for asthma, COPD, allergies
                  and pulmonary infections.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}

          <div className="col-lg-3 col-md-6">
            <div className="therapeutic-card">
              <img
                src={gastro}
                alt="Gastroenterology"
                className="therapeutic-card-image img-fluid"
              />

              <div className="therapeutic-card-body">
                <div className="therapeutic-card-header">
                  <div className="therapeutic-card-icon">
                    <i className="bi bi-capsule"></i>
                  </div>

                  <h5>Gastroenterology</h5>
                </div>

                <p>
                  Therapies addressing gastrointestinal disorders, liver care,
                  ulcers and digestive wellness.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}

          <div className="col-lg-3 col-md-6">
            <div className="therapeutic-card">
              <img
                src={neuro}
                alt="Neurology"
                className="therapeutic-card-image img-fluid"
              />

              <div className="therapeutic-card-body">
                <div className="therapeutic-card-header">
                  <div className="therapeutic-card-icon">
                    <i className="bi bi-activity"></i>
                  </div>

                  <h5>Neurology</h5>
                </div>

                <p>
                  Specialized neurological medicines supporting epilepsy, nerve
                  health and central nervous system disorders.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 */}

          <div className="col-lg-3 col-md-6">
            <div className="therapeutic-card">
              <img
                src={nephro}
                alt="Nephrology"
                className="therapeutic-card-image img-fluid"
              />

              <div className="therapeutic-card-body">
                <div className="therapeutic-card-header">
                  <div className="therapeutic-card-icon">
                    <i className="bi bi-heart"></i>
                  </div>

                  <h5>Nephrology</h5>
                </div>

                <p>
                  Dedicated renal therapies promoting kidney health and
                  effective management of chronic kidney diseases.
                </p>
              </div>
            </div>
          </div>

          {/* Card 7 */}

          <div className="col-lg-3 col-md-6">
            <div className="therapeutic-card">
              <img
                src={derma}
                alt="Dermatology"
                className="therapeutic-card-image img-fluid"
              />

              <div className="therapeutic-card-body">
                <div className="therapeutic-card-header">
                  <div className="therapeutic-card-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>

                  <h5>Dermatology</h5>
                </div>

                <p>
                  High-quality dermatological formulations for skin infections,
                  allergies and chronic skin conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 8 */}

          <div className="col-lg-3 col-md-6">
            <div className="therapeutic-card">
              <img
                src={oncology}
                alt="Oncology"
                className="therapeutic-card-image img-fluid"
              />

              <div className="therapeutic-card-body">
                <div className="therapeutic-card-header">
                  <div className="therapeutic-card-icon">
                    <i className="bi bi-award"></i>
                  </div>

                  <h5>Oncology</h5>
                </div>

                <p>
                  Supporting cancer care through trusted oncology products
                  developed with stringent quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
