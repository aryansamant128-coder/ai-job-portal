import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaBookmark,
} from "react-icons/fa";

export default function JobCard({
  job,
  applyJob,
  saveJob,
}) {
  async function handleApply() {
    try {
      const result = await applyJob(job.id);
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleSave() {
    try {
      const result = await saveJob(job.id);
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">

      {/* Company Logo */}
      <div className="flex justify-center pt-6">
        <img
          src={
            job.logo ||
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          alt={job.company}
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Job Details */}
      <div className="p-6">

        <h2 className="text-xl font-bold text-gray-800">
          {job.title}
        </h2>

        <p className="text-blue-600 font-semibold mt-1">
          {job.company}
        </p>

        {/* Information */}

        <div className="space-y-2 mt-5 text-gray-600">

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span>{job.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaBriefcase className="text-blue-500" />
            <span>{job.experience}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-green-500" />
            <span>{job.salary}</span>
          </div>

        </div>

        {/* Job Type */}

        <div className="mt-4">

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            {job.job_type}
          </span>

        </div>

        {/* Description */}

        <p className="text-gray-500 mt-4 line-clamp-3">
          {job.description}
        </p>

        {/* Buttons */}

        <div className="flex gap-3 mt-6">

          <Link
            to={`/jobs/${job.id}`}
            className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg transition"
          >
            View Details
          </Link>

          <button
            onClick={handleApply}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Apply Now
          </button>

        </div>

        <button
          onClick={handleSave}
          className="w-full mt-3 border border-gray-300 hover:bg-gray-100 py-2 rounded-lg flex justify-center items-center gap-2 transition"
        >
          <FaBookmark />
          Save Job
        </button>

      </div>
    </div>
  );
}