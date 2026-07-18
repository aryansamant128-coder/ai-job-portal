import {
  FaUserEdit,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProfileCard({ profile }) {
  const navigate = useNavigate();

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body text-center">

        {/* Profile Image */}
        <img
          src={
            profile?.image ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(
              profile?.name || "User"
            )}&background=0D6EFD&color=fff&size=200`
          }
          alt="Profile"
          className="rounded-circle mb-3"
          width="120"
          height="120"
        />

        {/* Name */}
        <h4 className="fw-bold">
          {profile?.name || "No Name"}
        </h4>

        {/* Title */}
        <p className="text-muted mb-4">
          {profile?.title || "No Title"}
        </p>

        <hr />

        {/* User Details */}
        <div className="text-start">

          <p className="mb-3">
            <FaEnvelope className="text-primary me-2" />
            {profile?.email || "No Email"}
          </p>

          <p className="mb-3">
            <FaPhone className="text-success me-2" />
            {profile?.phone || "No Phone"}
          </p>

          <p className="mb-3">
            <FaMapMarkerAlt className="text-danger me-2" />
            {profile?.location || "No Location"}
          </p>

        </div>

        <hr />

        {/* Skills */}
        <div className="text-start">

          <h6 className="fw-bold mb-3">
            Skills
          </h6>

          {profile?.skills ? (
            profile.skills.split(",").map((skill, index) => (
              <span
                key={index}
                className="badge bg-primary me-2 mb-2"
              >
                {skill.trim()}
              </span>
            ))
          ) : (
            <p className="text-muted">No skills added</p>
          )}

        </div>

        {/* Edit Profile Button */}
        <button
          className="btn btn-primary w-100 mt-4"
          onClick={() => navigate("/profile")}
        >
          <FaUserEdit className="me-2" />
          Edit Profile
        </button>

      </div>
    </div>
  );
}