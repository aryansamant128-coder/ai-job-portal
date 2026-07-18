import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">

        <div className="row gy-4">

          {/* Company Info */}
          <div className="col-lg-4 col-md-6">

            <h2 className="fw-bold text-primary">
              HirePilot
            </h2>

            <p className="text-light mt-3">
              HirePilot is an AI-powered job portal connecting talented
              professionals with leading companies. Discover jobs, apply
              instantly, and build your career with confidence.
            </p>

            <div className="d-flex gap-3 mt-4">

              <a href="#" className="btn btn-outline-light rounded-circle">
                <FaFacebookF />
              </a>

              <a href="#" className="btn btn-outline-light rounded-circle">
                <FaInstagram />
              </a>

              <a href="#" className="btn btn-outline-light rounded-circle">
                <FaLinkedinIn />
              </a>

              <a href="#" className="btn btn-outline-light rounded-circle">
                <FaTwitter />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2 col-md-6">

            <h5 className="fw-bold mb-4">
              Quick Links
            </h5>

            <ul className="list-unstyled">

              <li className="mb-3">
                <Link to="/" className="text-decoration-none text-light">
                  Home
                </Link>
              </li>

              <li className="mb-3">
                <Link to="/jobs" className="text-decoration-none text-light">
                  Jobs
                </Link>
              </li>

              <li className="mb-3">
                <Link to="/login" className="text-decoration-none text-light">
                  Login
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/register"
                  className="text-decoration-none text-light"
                >
                  Register
                </Link>
              </li>

            </ul>

          </div>

          {/* Job Categories */}

          <div className="col-lg-3 col-md-6">

            <h5 className="fw-bold mb-4">
              Popular Categories
            </h5>

            <ul className="list-unstyled">

              <li className="mb-3">Software Development</li>

              <li className="mb-3">Artificial Intelligence</li>

              <li className="mb-3">Data Science</li>

              <li className="mb-3">UI / UX Design</li>

              <li className="mb-3">Cloud Computing</li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-3 col-md-6">

            <h5 className="fw-bold mb-4">
              Contact
            </h5>

            <p>
              <FaMapMarkerAlt className="me-2 text-primary" />
              Mumbai, Maharashtra
            </p>

            <p>
              <FaPhoneAlt className="me-2 text-primary" />
              +91 98765 43210
            </p>

            <p>
              <FaEnvelope className="me-2 text-primary" />
              support@hirepilot.com
            </p>

          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">

          <p className="mb-2 mb-md-0">
            © 2026 <strong>HirePilot</strong>. All Rights Reserved.
          </p>

          <p className="mb-0">
            Built using React • Bootstrap • Supabase
          </p>

        </div>

      </div>
    </footer>
  );
}