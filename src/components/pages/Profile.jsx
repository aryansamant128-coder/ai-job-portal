import { useState } from "react";
import Navbar from "../landing/Navbar";

import ProfileCard from "../dashboard/ProfileCard";

import { getProfile } from "../../services/user/profileService";
function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
    experience: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await saveProfile(profile);

    alert("Profile saved successfully!");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
  return (
    <div className="container mt-5">
      <h2 className="mb-4">My Profile</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow">

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={profile.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={profile.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Skills</label>
          <textarea
            name="skills"
            className="form-control"
            rows="3"
            value={profile.skills}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Education</label>
          <textarea
            name="education"
            className="form-control"
            rows="3"
            value={profile.education}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Experience</label>
          <textarea
            name="experience"
            className="form-control"
            rows="3"
            value={profile.experience}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary">
          Save Profile
        </button>

      </form>
    </div>
  );
}

export default Profile;