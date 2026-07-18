import { FaEye } from "react-icons/fa";

export default function RecentApplications() {
  const applications = [
    {
      company: "Google",
      job: "Frontend Developer",
      date: "05 Jul 2026",
      status: "Under Review",
    },
    {
      company: "Microsoft",
      job: "React Developer",
      date: "03 Jul 2026",
      status: "Interview",
    },
    {
      company: "Amazon",
      job: "Software Engineer",
      date: "01 Jul 2026",
      status: "Rejected",
    },
    {
      company: "Meta",
      job: "UI/UX Developer",
      date: "28 Jun 2026",
      status: "Selected",
    },
  ];

  const badgeColor = (status) => {
    switch (status) {
      case "Selected":
        return "success";
      case "Interview":
        return "primary";
      case "Under Review":
        return "warning";
      case "Rejected":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <div className="card border-0 shadow-sm mt-4">

      <div className="card-header bg-white">
        <h5 className="fw-bold mb-0">
          Recent Applications
        </h5>
      </div>

      <div className="card-body p-0">

        <div className="table-responsive">

          <table className="table table-hover align-middle mb-0">

            <thead className="table-light">

              <tr>
                <th>Company</th>
                <th>Job Title</th>
                <th>Applied On</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {applications.map((item, index) => (

                <tr key={index}>

                  <td>{item.company}</td>

                  <td>{item.job}</td>

                  <td>{item.date}</td>

                  <td>
                    <span className={`badge bg-${badgeColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-outline-primary btn-sm">
                      <FaEye className="me-1" />
                      View
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}