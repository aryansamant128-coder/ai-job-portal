import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaFileAlt,
  FaUser,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      title: "Jobs",
      icon: <FaBriefcase />,
      path: "/jobs",
    },
    {
      title: "Applications",
      icon: <FaFileAlt />,
      path: "/applications",
    },
    {
      title: "Profile",
      icon: <FaUser />,
      path: "/profile",
    },
    {
      title: "Analytics",
      icon: <FaChartBar />,
      path: "/analytics",
    },
    {
      title: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <div
      className="bg-dark text-white d-flex flex-column"
      style={{
        width: "260px",
        minHeight: "100vh",
      }}
    >
      {/* Logo */}
      <div className="text-center py-4 border-bottom">
        <h3 className="fw-bold text-info">
          AI Job Portal
        </h3>
      </div>

      {/* Menu */}
      <div className="flex-grow-1 mt-3">

        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`d-flex align-items-center text-decoration-none px-4 py-3 ${
              location.pathname === item.path
                ? "bg-primary text-white"
                : "text-light"
            }`}
          >
            <span className="me-3 fs-5">
              {item.icon}
            </span>

            <span>{item.title}</span>
          </Link>
        ))}

      </div>

      {/* Logout */}

      <div className="border-top p-3">

        <button className="btn btn-danger w-100">

          <FaSignOutAlt className="me-2" />

          Logout

        </button>

      </div>
    </div>
  );
}