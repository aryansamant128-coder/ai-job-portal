import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Topbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center"
      style={{ borderBottom: "1px solid #e5e7eb" }}
    >
      {/* Left Side */}
      <div>
        <h3 className="fw-bold mb-1">Welcome Back 👋</h3>
        <small className="text-muted">{today}</small>
      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center gap-3">

        {/* Search */}
        <div className="input-group" style={{ width: "280px" }}>
          <span className="input-group-text bg-light border-end-0">
            <FaSearch />
          </span>

          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search jobs..."
          />
        </div>

        {/* Notification */}
        <button className="btn btn-light position-relative">
          <FaBell size={20} />

          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            3
          </span>
        </button>

        {/* User */}
        <div className="d-flex align-items-center">

          <FaUserCircle
            size={40}
            className="text-primary me-2"
          />

          <div>
            <h6 className="mb-0">Aryan Samant</h6>
            <small className="text-muted">
              Job Seeker
            </small>
          </div>

        </div>

      </div>
    </div>
  );
}