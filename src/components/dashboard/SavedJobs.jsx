import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";
import { FaBookmark, FaMapMarkerAlt } from "react-icons/fa";

export default function SavedJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  async function fetchSavedJobs() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } = await supabase
      .from("saved_jobs")
      .select(`
        id,
        jobs (
          id,
          title,
          company,
          location,
          salary
        )
      `)
      .eq("user_id", user.id);

    if (error) {
      console.log(error);
    } else {
      setJobs(data);
    }
  }

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-white">
        <h5 className="fw-bold mb-0">
          <FaBookmark className="me-2 text-primary" />
          Saved Jobs
        </h5>
      </div>

      <div className="card-body">
        {jobs.length === 0 ? (
          <p className="text-muted text-center">
            No saved jobs.
          </p>
        ) : (
          jobs.map((item) => (
            <div
              key={item.id}
              className="border rounded p-3 mb-3"
            >
              <h6 className="fw-bold">
                {item.jobs.title}
              </h6>

              <p className="text-primary mb-1">
                {item.jobs.company}
              </p>

              <small className="text-muted">
                <FaMapMarkerAlt className="me-1" />
                {item.jobs.location}
              </small>

              <div className="d-flex justify-content-between mt-3">
                <span className="fw-bold">
                  {item.jobs.salary}
                </span>

                <button className="btn btn-primary btn-sm">
                  View Job
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}