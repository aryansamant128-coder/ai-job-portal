import { useState } from "react";
import { Menu, X, Sun, Moon, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Companies", path: "#" },
    { name: "Features", path: "#" },
    { name: "About", path: "#" },
    { name: "Contact", path: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg">
            <BriefcaseBusiness size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Hire<span className="text-blue-600">Pilot</span>
            </h1>
            <p className="text-xs text-gray-500 -mt-1">
              AI Job Portal
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
<Link to="/resume-analyzer">
    Resume Analyzer
</Link>
        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <Link
            to="/login"
            className="px-5 py-2 border border-blue-600 rounded-lg text-blue-600 font-medium hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
          >
            Register
          </Link>
        </div>
      
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/login"
              className="border border-blue-600 rounded-lg py-2 text-center text-blue-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 text-white rounded-lg py-2 text-center"
            >
              Register
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}