import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaBookmark,
} from "react-icons/fa";

import Navbar from "../landing/Navbar";
import { getJob } from "../../services/user/jobService";
import { applyJob } from "../../services/user/applicationService";
export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function fetchJob() {
      const data = await getJob(id);
      setJob(data);
    }

    fetchJob();
  }, [id]);

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold">{job.title}</h1>

        <h2 className="text-xl text-blue-600 mt-2">
          {job.company}
        </h2>

        <div className="mt-6 space-y-3">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt />
            {job.location}
          </p>

          <p className="flex items-center gap-2">
            <FaBriefcase />
            {job.type}
          </p>

          <p className="flex items-center gap-2">
            <FaMoneyBillWave />
            {job.salary}
          </p>
        </div>

        <p className="mt-8">{job.description}</p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Apply Now
          </button>

          <button className="border px-6 py-2 rounded-lg flex items-center gap-2">
            <FaBookmark />
            Save Job
          </button>

          <Link
            to="/jobs"
            className="border px-6 py-2 rounded-lg"
          >
            Back
          </Link>
        </div>
      </div>
    </>
  );
}