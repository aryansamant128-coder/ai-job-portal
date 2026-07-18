import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export default function UpcomingInterviews() {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    fetchInterviews();
  }, []);

  async function fetchInterviews() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } = await supabase
      .from("interviews")
      .select(`
        id,
        interview_date,
        interview_time,
        mode,
        meeting_link,
        applications (
          jobs (
            title,
            company
          )
        )
      `);

    if (error) {
      console.log(error);
    } else {
      setInterviews(data);
    }
  }

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-white">
        <h5 className="fw-bold mb-0">
          Upcoming Interviews
        </h5>
      </div>

      <div className="card-body">

        {interviews.length === 0 ? (
          <p className="text-center text-muted">
            No interviews scheduled.
          </p>
        ) : (
          interviews.map((item) => (
            <div
              key={item.id}
              className="border rounded p-3 mb-3"
            >
              <h6 className="fw-bold">
                {item.applications?.jobs?.company}
              </h6>

              <p className="text-primary">
                {item.applications?.jobs?.title}
              </p>

              <div className="d-flex justify-content-between">

                <small>
                  <FaCalendarAlt className="me-1" />
                  {item.interview_date}
                </small>

                <small>
                  <FaClock className="me-1" />
                  {item.interview_time}
                </small>

              </div>

              <p className="mt-2">
                <strong>Mode:</strong> {item.mode}
              </p>

              {item.meeting_link && (
                <a
                  href={item.meeting_link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success btn-sm mt-2"
                >
                  Join Interview
                </a>
              )}
            </div>
          ))
        )}

      </div>
    </div>
  );
}