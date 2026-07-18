import {
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaApple,
} from "react-icons/fa";

import { MdLocationOn, MdWork } from "react-icons/md";

export default function FeaturedJobs() {
  const jobs = [
  {
    company: "Google",
    icon: <FaGoogle className="text-danger fs-2" />,
    title: "Frontend Developer",
    location: "Bangalore",
    salary: "₹18 - ₹25 LPA",
    type: "Full Time",
  },
  {
    company: "Microsoft",
    icon: <FaMicrosoft className="text-primary fs-2" />,
    title: "React Developer",
    location: "Hyderabad",
    salary: "₹15 - ₹22 LPA",
    type: "Remote",
  },
  {
    company: "Amazon",
    icon: <FaAmazon className="text-warning fs-2" />,
    title: "Software Engineer",
    location: "Pune",
    salary: "₹20 - ₹30 LPA",
    type: "Hybrid",
  },
  {
    company: "Apple",
    icon: <FaApple className="text-dark fs-2" />,
    title: "Full Stack Developer",
    location: "Chennai",
    salary: "₹20 - ₹28 LPA",
    type: "Full Time",
  },
  {
    company: "Google",
    icon: <FaGoogle className="text-danger fs-2" />,
    title: "UI/UX Designer",
    location: "Mumbai",
    salary: "₹12 - ₹18 LPA",
    type: "Internship",
  },
  {
    company: "Microsoft",
    icon: <FaMicrosoft className="text-primary fs-2" />,
    title: "Backend Developer",
    location: "Noida",
    salary: "₹16 - ₹24 LPA",
    type: "Remote",
  },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">Featured Jobs</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Discover exciting career opportunities at top companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 border border-gray-100 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {job.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-3">
                  {job.company}
                </h3>
              </div>

              <h4 className="text-lg font-bold text-gray-900">{job.title}</h4>

              <div className="flex items-center mt-4 text-gray-600">
                <MdLocationOn />
                <span className="ml-2">{job.location}</span>
              </div>

              <div className="flex items-center mt-2 text-gray-600">
                <MdWork />
                <span className="ml-2">{job.salary}</span>
              </div>

              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}