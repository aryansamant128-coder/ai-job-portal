import JobCard from "./JobCard";

export default function JobList({
  jobs,
  applyJob,
  saveJob,
}) {
  if (jobs.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          No Jobs Found
        </h2>

        <p className="text-gray-500 mt-2">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          applyJob={applyJob}
          saveJob={saveJob}
        />
      ))}
    </div>
  );
}