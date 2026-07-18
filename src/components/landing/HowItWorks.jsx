import {
  FaUserPlus,
  FaUserEdit,
  FaSearch,
  FaBriefcase,
} from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus className="display-4 text-primary" />,
      title: "Create Account",
      description:
        "Sign up as a Job Seeker or Recruiter in just a few clicks.",
    },
    {
      icon: <FaUserEdit className="display-4 text-success" />,
      title: "Complete Profile",
      description:
        "Add your personal details, skills, education, and experience.",
    },
    {
      icon: <FaSearch className="display-4 text-warning" />,
      title: "Search & Apply",
      description:
        "Browse thousands of jobs, filter them, and apply instantly.",
    },
    {
      icon: <FaBriefcase className="display-4 text-danger" />,
      title: "Get Hired",
      description:
        "Track your application status and receive interview invitations.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">
            How It Works
          </h2>

          <p className="text-muted fs-5">
            Start your career journey in four simple steps.
          </p>
        </div>

        <div className="row">

          {steps.map((step, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div
                className="card border-0 shadow rounded-4 text-center h-100 p-4"
                style={{
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0px)")
                }
              >
                <div className="mb-4">
                  {step.icon}
                </div>

                <h4 className="fw-bold">
                  {step.title}
                </h4>

                <p className="text-muted mt-3">
                  {step.description}
                </p>

                <div className="mt-3">
                  <span className="badge bg-primary rounded-pill px-3 py-2">
                    Step {index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}