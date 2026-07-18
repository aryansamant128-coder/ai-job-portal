import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import AdminLayout from "../../Admin/AdminLayout";
=======

import AdminLayout from "../../components/admin/AdminLayout";
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79
import {
  getAdminProfile,
  updateAdminProfile,
  adminLogout,
<<<<<<< HEAD
} from "../../../services/admin/adminAuthService";
=======
} from "../../services/admin/adminSettingsService";
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

const Settings = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getAdminProfile();

      setForm({
        full_name: data.full_name || "",
        email: data.email || "",
        phone: data.phone || "",
        location: data.location || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateAdminProfile({
        full_name: form.full_name,
        phone: form.phone,
        location: form.location,
      });

      alert("Profile Updated Successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await adminLogout();
<<<<<<< HEAD
=======

>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79
    navigate("/admin/login");
  };

  return (
    <AdminLayout>
<<<<<<< HEAD
      <div className="max-w-3xl mx-auto py-10">

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold">Admin Settings</h1>
            <p className="text-blue-100 mt-1">
              Manage your profile information
            </p>
          </div>

          {/* Body */}
          <div className="p-8">

            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
                {form.full_name
                  ? form.full_name.charAt(0).toUpperCase()
                  : "A"}
              </div>
            </div>

            <form onSubmit={handleUpdate}>

              <div className="mb-5">
                <label className="block mb-2 font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  value={form.email}
                  disabled
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-semibold">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Enter Location"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Update Profile
              </button>

            </form>

            <hr className="my-8" />

            <button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Logout
            </button>

          </div>
        </div>

      </div>
=======

      <h1>Admin Settings</h1>

      <form onSubmit={handleUpdate}>

        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={form.full_name}
          onChange={handleChange}
        />

        <input
          type="email"
          value={form.email}
          disabled
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />

        <button type="submit">
          Update Profile
        </button>

      </form>

      <br />

      <button onClick={handleLogout}>
        Logout
      </button>

>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79
    </AdminLayout>
  );
};

export default Settings;