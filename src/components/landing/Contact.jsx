import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Contact Us</h2>
          <p className="text-muted fs-5">
            We'd love to hear from you. Send us your questions or feedback.
          </p>
        </div>

        <div className="row g-5 align-items-center">

          {/* Left Side */}
          <div className="col-lg-5">

            <div className="card border-0 shadow rounded-4 p-4 h-100">

              <h3 className="fw-bold mb-4">
                Get In Touch
              </h3>

              <div className="d-flex mb-4">
                <div className="me-3 fs-3 text-primary">
                  <FaEnvelope />
                </div>

                <div>
                  <h5>Email</h5>
                  <p className="text-muted mb-0">
                    support@hirepilot.com
                  </p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="me-3 fs-3 text-success">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h5>Phone</h5>
                  <p className="text-muted mb-0">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <div className="me-3 fs-3 text-danger">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h5>Location</h5>
                  <p className="text-muted mb-0">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-7">

            <div className="card border-0 shadow rounded-4 p-4">

              <form>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email"
                    />
                  </div>

                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button
                  className="btn btn-primary btn-lg rounded-pill px-5"
                  type="submit"
                >
                  <FaPaperPlane className="me-2" />
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}