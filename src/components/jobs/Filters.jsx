export default function Filters({
  jobType,
  setJobType,
  workMode,
  setWorkMode,
  experience,
  setExperience,
}) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">

      <h2 className="text-xl font-bold text-gray-800 mb-5">
        Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Job Type */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Job Type
          </label>

          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">All</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        {/* Work Mode */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Work Mode
          </label>

          <select
            value={workMode}
            onChange={(e) => setWorkMode(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">All</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On Site">On Site</option>
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Experience
          </label>

          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">All</option>
            <option value="0-1 Years">0-1 Years</option>
            <option value="1-3 Years">1-3 Years</option>
            <option value="2-4 Years">2-4 Years</option>
            <option value="3-5 Years">3-5 Years</option>
            <option value="5+ Years">5+ Years</option>
          </select>
        </div>

      </div>
    </div>
  );
}