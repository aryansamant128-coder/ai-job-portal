import { useState, useEffect } from "react";
import Navbar from "../landing/Navbar";
import SearchBar from "../jobs/SearchBar";
import Filters from "../jobs/Filters";
import JobCard from "../jobs/JobCard";
import { getJobs } from "../../services/user/jobService";
import { applyJob } from "../../services/user/applicationService";
import { saveJob } from "../../services/user/savedJobService";


export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  // Filters
  const [jobType, setJobType] = useState("");
  const [workMode, setWorkMode] = useState("");
  const [experience, setExperience] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    try {
      setLoading(true);
      const data = await getJobs();
      setJobs(data || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  }

  // Filter Jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesTitle =
      !searchTerm ||
      job.title?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      !location ||
      job.location?.toLowerCase().includes(location.toLowerCase());

    const matchesType =
      !jobType || job.job_type === jobType;

    // Skip if your database doesn't have work_mode
    const matchesMode =
      !workMode ||
      job.work_mode === workMode ||
      job.mode === workMode;

    const matchesExperience =
      !experience || job.experience === experience;

    return (
      matchesTitle &&
      matchesLocation &&
      matchesType &&
      matchesMode &&
      matchesExperience
    );
  });

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobs = filteredJobs.slice(
    indexOfFirstJob,
    indexOfLastJob
  );

  const totalPages = Math.ceil(
    filteredJobs.length / jobsPerPage
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-5 py-10">

        <h1 className="text-4xl font-bold mb-8">
          Find Your Dream Job
        </h1>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          location={location}
          setLocation={setLocation}
        />

        <Filters
          jobType={jobType}
          setJobType={setJobType}
          workMode={workMode}
          setWorkMode={setWorkMode}
          experience={experience}
          setExperience={setExperience}
        />

        {loading ? (
          <div className="text-center py-5">
            <h4>Loading jobs...</h4>
          </div>
        ) : currentJobs.length === 0 ? (
          <div className="text-center py-5">
            <h4>No jobs found.</h4>
          </div>
        ) : (
          <>
            <JobList
              jobs={currentJobs}
              applyJob={applyJob}
              saveJob={saveJob}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
}