import "../styles/aboutUsContactSec.css";

function AboutUsContactSec() {
  return (
    <section className="about-contact-section">
      <div className="container">
        <div className="about-contact-wrapper">
          <div className="row about-contact-row">
            {/* Left */}

            <div className="col-lg-3 about-contact-left-column">
              <p className="about-contact-small-heading">Get In Touch</p>

              <div className="about-contact-line"></div>

              <h2 className="about-contact-heading">
                We're Here
                <br />
                To <span>Help You</span>
              </h2>

              <p className="about-contact-text">
                Have a question or want to know more about our products? Feel
                free to reach out to us.
              </p>
            </div>

            {/* Center */}

            <div className="col-lg-6 about-contact-form-column">
              <form>
                <div className="row about-form-row">
                  <div className="col-md-6 about-form-column">
                    <input
                      type="text"
                      className="form-control about-input"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="col-md-6 about-form-column">
                    <input
                      type="email"
                      className="form-control about-input"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="col-md-6 about-form-column">
                    <input
                      type="text"
                      className="form-control about-input"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="col-md-6 about-form-column">
                    <select className="form-select about-input">
                      <option>Select Subject</option>
                      <option>General Inquiry</option>
                      <option>Business</option>
                      <option>Support</option>
                    </select>
                  </div>

                  <div className="col-12 about-form-column">
                    <textarea
                      className="form-control about-textarea"
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <div className="col-12 about-form-column">
                    <button type="submit" className="about-contact-btn">
                      Send Message
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Right */}

            <div className="col-lg-3 about-contact-info-column">
              <div className="about-contact-card">
                <h4>Contact Information</h4>

                <div className="about-contact-item">
                  <i className="bi bi-geo-alt"></i>

                  <div>
                    <h6>Address</h6>
                    <p>
                      Plot No. XX, Pharma City, Sector XX, Selaqui, Dehradun,
                      Uttarakhand, India
                    </p>
                  </div>
                </div>

                <div className="about-contact-item">
                  <i className="bi bi-telephone"></i>

                  <div>
                    <h6>Phone</h6>
                    <p>+91 1234567890</p>
                  </div>
                </div>

                <div className="about-contact-item">
                  <i className="bi bi-envelope"></i>

                  <div>
                    <h6>Email</h6>
                    <p>info@forwellpharma.com</p>
                  </div>
                </div>

                <div className="about-contact-item">
                  <i className="bi bi-globe"></i>

                  <div>
                    <h6>Website</h6>
                    <p>www.forwellpharma.com</p>
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

export default AboutUsContactSec;
