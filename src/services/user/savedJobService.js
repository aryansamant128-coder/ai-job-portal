import { supabase } from "../supabase";

// 1. ADD THIS ADDED FUNCTION BACK: Save a Job
export async function saveJob(jobId) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User not logged in");

  // Check if already saved
  const { data: existing, error: fetchError } = await supabase
    .from("saved_jobs")
    .select("id")
    .eq("user_id", user.id)
    .eq("job_id", jobId)
    .maybeSingle();

  if (fetchError) throw fetchError;

  if (existing) {
    return {
      success: false,
      message: "Job already saved.",
    };
  }

  // Insert new saved job row
  const { error } = await supabase
    .from("saved_jobs")
    .insert({
      user_id: user.id,
      job_id: jobId,
    });

  if (error) throw error;

  return {
    success: true,
    message: "Job saved successfully.",
  };
}

// 2. YOUR EXISTING FUNCTION: Get Saved Jobs
export async function getSavedJobs() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("saved_jobs")
    .select(`
      id,
      saved_at,
      jobs (
        id,
        title,
        company,
        location,
        salary,
        logo
      )
    `)
    .eq("user_id", user.id)
    .order("saved_at", { ascending: false });

  if (error) {
    console.error("Error fetching saved jobs:", error.message);
    return [];
  }

  return data;
}