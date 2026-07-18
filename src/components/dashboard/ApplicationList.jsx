import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ApplicationList({ applications }) {
  if (!applications || applications.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">
          Recent Applications
        </h2>

        <div className="text-center py-10">
          <FaBriefcase className="mx-auto text-5xl text-gray-400 mb-4" />

          <h3 className="text-xl font-semibold text-gray-700">
            No Applications Yet
          </h3>

          <p className="text-gray-500 mt-2">
            Start applying for jobs to see them here.
          </p>

          <Link
            to="/jobs"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Applications
      </h2>

      <div className="space-y-5">

        {applications.map((application) => {

          const job = application.jobs;

          return (
            <div
              key={application.id}
              className="border rounded-xl p-5 hover:shadow-md transition"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-xl font-bold">
                    {job?.title}
                  </h3>

                  <div className="flex items-center gap-2 text-blue-600 mt-2">
                    <FaBuilding />
                    <span>{job?.company}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <FaMapMarkerAlt />
                    <span>{job?.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <FaCalendarAlt />
                    <span>
                      Applied on{" "}
                      {new Date(
                        application.applied_at
                      ).toLocaleDateString()}
                    </span>
                  </div>

                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold
                    ${
                      application.status === "Applied"
                        ? "bg-blue-100 text-blue-700"
                        : application.status === "Under Review"
                        ? "bg-yellow-100 text-yellow-700"
                        : application.status === "Interview"
                        ? "bg-purple-100 text-purple-700"
                        : application.status === "Selected"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {application.status}
                </span>

              </div>

              <div className="mt-5 flex gap-3">

                <Link
                  to={`/jobs/${job?.id}`}
                  className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-lg"
                >
                  View Job
                </Link>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}