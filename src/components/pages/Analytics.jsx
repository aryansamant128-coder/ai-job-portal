import { useEffect, useState } from "react";
 // Remove this line if you don't have DashboardLayout
import {
  getTotalApplications,
  getTotalSavedJobs,
  getTotalInterviews,
  getLatestATSScore,
<<<<<<< HEAD
} from "../../services/user/analyticsService";
=======
} from "../services/user/analyticsService";
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

const Analytics = () => {
  const [stats, setStats] = useState({
    applications: 0,
    savedJobs: 0,
    interviews: 0,
    atsScore: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const applications = await getTotalApplications();
      const savedJobs = await getTotalSavedJobs();
      const interviews = await getTotalInterviews();
      const atsScore = await getLatestATSScore();

      setStats({
        applications,
        savedJobs,
        interviews,
        atsScore,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <h2>Loading Analytics...</h2>
      </div>
    );
  }

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        My Analytics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">Applications</h2>
          <p className="text-3xl font-bold">{stats.applications}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">Saved Jobs</h2>
          <p className="text-3xl font-bold">{stats.savedJobs}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">Interviews</h2>
          <p className="text-3xl font-bold">{stats.interviews}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">ATS Score</h2>
          <p className="text-3xl font-bold">{stats.atsScore}%</p>
        </div>

      </div>

    </div>
  );
};

export default Analytics;