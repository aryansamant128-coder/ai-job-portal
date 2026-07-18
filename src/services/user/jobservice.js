import { supabase } from "../supabase";

// Get all jobs
export async function getJobs() {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

// Get single job
export async function getJob(id) {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

// Create job
export async function createJob(job) {
  const { data, error } = await supabase
    .from("jobs")
    .insert([job]);

  if (error) throw error;

  return data;
}

// Update job
export async function updateJob(id, job) {
  const { data, error } = await supabase
    .from("jobs")
    .update(job)
    .eq("id", id);

  if (error) throw error;

  return data;
}

// Delete job
export async function deleteJob(id) {
  const { error } = await supabase
    .from("jobs")
    .delete()
    .eq("id", id);

  if (error) throw error;
}