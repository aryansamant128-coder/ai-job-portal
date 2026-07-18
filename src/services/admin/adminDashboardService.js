import {supabase} from "../supabase";

export const getDashboardStats = async () => {
  try {
    // Fetch all data in parallel
    const [
      usersResult,
      jobsResult,
      applicationsResult,
      interviewsResult,
      savedJobsResult,
    ] = await Promise.all([
      supabase.from("users").select("*", { count: "exact", head: true }),
      supabase.from("jobs").select("*", { count: "exact", head: true }),
      supabase.from("applications").select("*", { count: "exact", head: true }),
      supabase.from("interviews").select("*", { count: "exact", head: true }),
      supabase.from("saved_jobs").select("*", { count: "exact", head: true }),
    ]);

    return {
      totalUsers: usersResult.count || 0,
      totalJobs: jobsResult.count || 0,
      totalApplications: applicationsResult.count || 0,
      totalInterviews: interviewsResult.count || 0,
      totalSavedJobs: savedJobsResult.count || 0,
    };
  } catch (error) {
    console.error("Dashboard Stats Error:", error);

    return {
      totalUsers: 0,
      totalJobs: 0,
      totalApplications: 0,
      totalInterviews: 0,
      totalSavedJobs: 0,
    };
  }
};