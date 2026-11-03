import "../styles/aboutUsContactSec.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createContact } from "../services/api";

function AboutUsContactSec() {
  const location = useLocation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (location.hash === "#contact-form") {
      const element = document.getElementById("contact-form");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  // Form submit function
  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);

      const response = await createContact(data);

      console.log("Backend Response:", response);

      alert("Your message has been sent successfully!");

      reset();
    } catch (error) {
      console.log("Error:", error);

      alert("Something went wrong while sending your message.");
    }
  };

  return (
    <section className="about-contact-section" id="contact-form">
      <div className="container">
        <div className="about-contact-wrapper">
          <div className="row about-contact-row">
            {/* Left */}
            <div className="col-lg-9 about-contact-form-column">
              <p className="about-contact-small-heading">Get In Touch</p>

              <div className="about-contact-line"></div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="row about-form-row">
                  {/* Name */}
                  <div className="col-md-6 about-form-column">
                    <input
                      type="text"
                      className={`form-control about-input ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Your Name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must contain at least 2 characters",
                        },
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "Name can contain only letters",
                        },
                      })}
                    />

                    {errors.name && (
                      <small className="about-error-message">
                        {errors.name.message}
                      </small>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-md-6 about-form-column">
                    <input
                      type="email"
                      className={`form-control about-input ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Email Address"
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value:
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />

                    {errors.email && (
                      <small className="about-error-message">
                        {errors.email.message}
                      </small>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="col-md-6 about-form-column">
                    <input
                      type="tel"
                      className={`form-control about-input ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      placeholder="Phone Number"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message:
                            "Phone number must contain exactly 10 digits",
                        },
                      })}
                    />

                    {errors.phone && (
                      <small className="about-error-message">
                        {errors.phone.message}
                      </small>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="col-md-6 about-form-column">
                    <select
                      className={`form-select about-input ${
                        errors.subject ? "is-invalid" : ""
                      }`}
                      {...register("subject", {
                        required: "Please select a subject",
                      })}
                    >
                      <option value="">Select Subject</option>

                      <option value="general-inquiry">General Inquiry</option>

                      <option value="business">Business</option>

                      <option value="support">Support</option>
                    </select>

                    {errors.subject && (
                      <small className="about-error-message">
                        {errors.subject.message}
                      </small>
                    )}
                  </div>

                  {/* Message */}
                  <div className="col-12 about-form-column">
                    <textarea
                      className={`form-control about-textarea ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      rows="4"
                      placeholder="Your Message"
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message:
                            "Message must contain at least 10 characters",
                        },
                      })}
                    ></textarea>

                    {errors.message && (
                      <small className="about-error-message">
                        {errors.message.message}
                      </small>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 about-form-column">
                    <button type="submit" className="about-contact-btn" disabled={isSubmitting}>
                      {isSubmitting ? "Sending Message..." : "Send Message"}

                      {!isSubmitting && (
                     <i className="bi bi-arrow-right ms-2"></i> )}
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
