import {
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaApple,
} from "react-icons/fa";

export default function Companies() {
  const companies = [
    {
  name: "Google",
  logo: <FaGoogle className="text-red-500 text-5xl" />,
},
{
  name: "Microsoft",
  logo: <FaMicrosoft className="text-blue-500 text-5xl" />,
},
{
  name: "Amazon",
  logo: <FaAmazon className="text-yellow-500 text-5xl" />,
},

{
  name: "Apple",
  logo: <FaApple className="text-black text-5xl" />,
},

  ]
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Top Companies
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Explore career opportunities from the world's leading companies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center border border-gray-100 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-5">
                {company.logo}
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {company.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {company.jobs}
              </p>

              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
                View Jobs
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}