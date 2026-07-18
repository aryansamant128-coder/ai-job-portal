import { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { adminLogin } from "../../../services/admin/adminAuthService";
=======
import { AdminLogin } from "../../services/admin/adminAuthService";
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

const AdminLogin = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await adminLogin(email, password);

      navigate("/admin/dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-500 text-white items-center justify-center p-10">

        <div>

          <h1 className="text-6xl font-bold mb-6">
            HirePilot
          </h1>

          <h2 className="text-3xl font-semibold mb-4">
            AI Job Portal
          </h2>

          <p className="text-lg opacity-90 leading-8 max-w-md">
            Manage users, jobs, applications and analytics
            from one professional dashboard.
          </p>

        </div>

      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center bg-gray-100">

        <div className="bg-white shadow-2xl rounded-3xl w-[420px] p-10">

          <div className="text-center mb-8">

            <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold">
              H
            </div>

            <h2 className="text-3xl font-bold mt-4">
              Admin Login
            </h2>

            <p className="text-gray-500">
              Welcome back
            </p>

          </div>

          <form onSubmit={handleLogin}>

            <div className="relative mb-5">

              <FaEnvelope className="absolute top-4 left-4 text-gray-400" />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />

            </div>

            <div className="relative mb-5">

              <FaLock className="absolute top-4 left-4 text-gray-400"/>

              <input
                type={showPassword ? "text":"password"}
                placeholder="Password"
                className="w-full border rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="absolute right-4 top-4"
                onClick={()=>setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
              </button>

            </div>

            <div className="flex justify-between mb-6 text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox"/>
                Remember Me
              </label>

              <a href="#" className="text-blue-600">
                Forgot Password?
              </a>

            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold transition"
            >
              {loading ? "Signing In..." : "Login"}
            </button>

          </form>

        </div>

      </div>
=======
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await adminLogin(
        formData.email,
        formData.password
      );

      navigate("/admin/dashboard");

    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="admin-login-container">

      <form
        className="admin-login-form"
        onSubmit={handleSubmit}
      >

        <h2>HirePilot Admin Login</h2>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Login"}
        </button>

      </form>
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

    </div>
  );
};

export default AdminLogin;