<<<<<<< HEAD
import { supabase } from "../supabase";

export const getAnalytics = async () => {
  const [
    users,
    jobs,
    applications,
    interviews,
    savedJobs,
  ] = await Promise.all([
    supabase.from("profiles").select("*"),
    supabase.from("jobs").select("*"),
    supabase.from("applications").select("*"),
    supabase.from("interviews").select("*"),
    supabase.from("saved_jobs").select("*"),
  ]);

  return [
    {
      name: "Users",
      total: users.data?.length || 0,
    },
    {
      name: "Jobs",
      total: jobs.data?.length || 0,
    },
    {
      name: "Applications",
      total: applications.data?.length || 0,
    },
    {
      name: "Interviews",
      total: interviews.data?.length || 0,
    },
    {
      name: "Saved Jobs",
      total: savedJobs.data?.length || 0,
    },
  ];
=======
import supabase from "../supabase";

export const getAnalytics = async () => {
  try {
    const [
      users,
      jobs,
      applications,
      resumes,
    ] = await Promise.all([
      supabase.from("profiles").select("*", { count: "exact", head: true }),
      supabase.from("jobs").select("*", { count: "exact", head: true }),
      supabase.from("applications").select("*", { count: "exact", head: true }),
      supabase.from("resume_analysis").select("*", { count: "exact", head: true }),
    ]);

    return [
      {
        name: "Users",
        total: users.count || 0,
      },
      {
        name: "Jobs",
        total: jobs.count || 0,
      },
      {
        name: "Applications",
        total: applications.count || 0,
      },
      {
        name: "Resumes",
        total: resumes.count || 0,
      },
    ];
  } catch (error) {
    throw error;
  }
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79
};