import {
  FaBriefcase,
  FaFileAlt,
  FaBookmark,
  FaEye,
} from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      title: "Applications",
      value: "24",
      icon: <FaFileAlt size={28} />,
      color: "primary",
    },
    {
      title: "Available Jobs",
      value: "320",
      icon: <FaBriefcase size={28} />,
      color: "success",
    },
    {
      title: "Saved Jobs",
      value: "12",
      icon: <FaBookmark size={28} />,
      color: "warning",
    },
    {
      title: "Profile Views",
      value: "145",
      icon: <FaEye size={28} />,
      color: "danger",
    },
  ];

  return (
    <div className="row g-4">

      {stats.map((item, index) => (

        <div className="col-md-6 col-xl-3" key={index}>

          <div className={`card border-0 shadow-sm bg-${item.color} text-white`}>

            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <h6 className="mb-2">
                    {item.title}
                  </h6>

                  <h2 className="fw-bold">
                    {item.value}
                  </h2>

                </div>

                <div className="display-6">

                  {item.icon}

                </div>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}