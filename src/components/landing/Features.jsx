import {
  FaRobot,
  FaFileAlt,
  FaBriefcase,
  FaComments,
  FaChartLine,
  FaUserCheck,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaRobot className="text-4xl text-primary mb-4" />,
      title: "AI Resume Analyzer",
      description:
        "Analyze your resume instantly and receive suggestions to improve your chances of getting hired.",
    },
    {
      icon: <FaBriefcase className="text-4xl text-success mb-4" />,
      title: "Smart Job Recommendations",
      description:
        "Get personalized job recommendations using AI based on your skills and experience.",
    },
    {
      icon: <FaComments className="text-4xl text-warning mb-4" />,
      title: "Interview Questions",
      description:
        "Generate technical and HR interview questions tailored to your chosen job role.",
    },
    {
      icon: <FaFileAlt className="text-4xl text-danger mb-4" />,
      title: "Resume Builder",
      description:
        "Create a professional ATS-friendly resume within minutes using ready-made templates.",
    },
    {
      icon: <FaChartLine className="text-4xl text-info mb-4" />,
      title: "Career Analytics",
      description:
        "Track your applications, interview progress, and profile performance using dashboards.",
    },
    {
      icon: <FaUserCheck className="text-4xl text-secondary mb-4" />,
      title: "Profile Verification",
      description:
        "Maintain a verified professional profile to increase trust with recruiters.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">
            AI Powered Features
          </h2>

          <p className="text-muted fs-5">
            Everything you need to land your dream job in one platform.
          </p>
        </div>

        <div className="row g-4">

          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="card h-100 border-0 shadow-lg rounded-4 p-4 text-center"
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
                {feature.icon}

                <h4 className="fw-bold mb-3">
                  {feature.title}
                </h4>

                <p className="text-muted">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}