import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  location,
  setLocation,
}) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search Input */}
        <div className="relative">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Location Input */}
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Search Button */}
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold transition"
        >
          Search Jobs
        </button>

      </div>
    </div>
  );
}