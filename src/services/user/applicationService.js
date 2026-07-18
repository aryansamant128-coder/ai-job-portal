import { supabase } from "../supabase";

// ==========================
// Apply for a Job
// ==========================
export async function applyJob(jobId) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not logged in");
  }

  // Check if already applied
  const { data: existing } = await supabase
    .from("applications")
    .select("id")
    .eq("user_id", user.id)
    .eq("job_id", jobId)
    .maybeSingle();

  if (existing) {
    return {
      success: false,
      message: "You have already applied for this job.",
    };
  }

  const { error } = await supabase
    .from("applications")
    .insert({
      user_id: user.id,
      job_id: jobId,
      status: "Applied",
    });

  if (error) throw error;

  return {
    success: true,
    message: "Application submitted successfully.",
  };
}

// ==========================
// Get Current User Applications
// ==========================
export async function getMyApplications() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("applications")
    .select(`
      id,
      status,
      applied_at,
      jobs (
        id,
        title,
        company,
        location,
        salary
      )
    `)
    .eq("user_id", user.id)
    .order("applied_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}