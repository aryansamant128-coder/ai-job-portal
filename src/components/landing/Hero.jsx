import { Search, MapPin, ArrowRight, Sparkles, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles size={18} />
              AI Powered Job Portal
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Find Your
              <span className="text-blue-600"> Dream Job </span>
              Faster with AI
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Discover thousands of verified jobs, receive AI-powered job
              recommendations, analyze your resume, and prepare for interviews
              — all in one platform.
            </p>

            {/* Search Box */}
            <div className="bg-white shadow-xl rounded-2xl p-5 mt-10">

              <div className="grid md:grid-cols-3 gap-4">

                <div className="flex items-center border rounded-xl px-4">
                  <Search className="text-blue-600" size={20} />
                  <input
                    type="text"
                    placeholder="Job title"
                    className="w-full p-3 outline-none"
                  />
                </div>

                <div className="flex items-center border rounded-xl px-4">
                  <MapPin className="text-blue-600" size={20} />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full p-3 outline-none"
                  />
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2">
                  Search Jobs
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
                Explore Jobs
              </button>

              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold">
                Upload Resume
              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-12">

              <div>
                <h2 className="text-3xl font-bold text-blue-600">15K+</h2>
                <p className="text-gray-500">Active Jobs</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">5K+</h2>
                <p className="text-gray-500">Companies</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">120K+</h2>
                <p className="text-gray-500">Candidates</p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">

              <div className="flex items-center gap-3">

                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Briefcase size={30} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    AI Career Assistant
                  </h3>
                  <p className="text-gray-500">
                    Personalized Job Matching
                  </p>
                </div>

              </div>

              <div className="mt-8 space-y-5">

                <div className="bg-blue-50 rounded-xl p-4">
                  ✅ Resume Score: <b>92%</b>
                </div>

                <div className="bg-green-50 rounded-xl p-4">
                  🎯 12 New Jobs Matched
                </div>

                <div className="bg-purple-50 rounded-xl p-4">
                  🤖 AI Interview Questions Ready
                </div>

                <div className="bg-orange-50 rounded-xl p-4">
                  📄 Resume Analysis Completed
                </div>

              </div>

              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                Start Using AI
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}