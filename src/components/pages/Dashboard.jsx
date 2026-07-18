

import { useEffect, useState } from "react";

import Navbar from "../landing/Navbar";

import ProfileCard from "../dashboard/ProfileCard";
import SavedJobs from "../dashboard/SavedJobs";
import UpcomingInterviews from "../dashboard/UpcomingInterviews";
import ApplicationList from "../dashboard/ApplicationList";

import { getMyApplications } from "../../services/user/applicationService";
import { getProfile } from "../../services/user/profileService";
import { getUpcomingInterviews } from "../../services/user/interviewService";
export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [applications, setApplications] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const profileData = await getProfile();
      const applicationData = await getMyApplications();
      // getSavedJobs was not defined/imported; default to empty array
      const savedData = [];
      const interviewData = await getUpcomingInterviews();

      setProfile(profileData);
      setApplications(applicationData);
      setSavedJobs(savedData);
      setInterviews(interviewData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen p-8">

        <h1 className="text-4xl font-bold mb-8">
          My Dashboard
        </h1>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Applications</h3>
            <p className="text-3xl font-bold mt-2">
              {applications.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Saved Jobs</h3>
            <p className="text-3xl font-bold mt-2">
              {savedJobs.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Upcoming Interviews</h3>
            <p className="text-3xl font-bold mt-2">
              {interviews.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Profile</h3>
            <p className="text-xl font-semibold mt-2">
              {profile ? "Completed" : "Incomplete"}
            </p>
          </div>

        </div>

        {/* Profile */}

        <div className="mb-8">
          <ProfileCard profile={profile} />
        </div>

        {/* Applications */}

        <div className="mb-8">
          <ApplicationList applications={applications} />
        </div>

        {/* Saved Jobs */}

        <div className="mb-8">
          <SavedJobs jobs={savedJobs} />
        </div>

        {/* Interviews */}

        <UpcomingInterviews interviews={interviews} />

      </div>
    </>
  );
}