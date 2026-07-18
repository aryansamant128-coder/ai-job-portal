<<<<<<< HEAD
import {supabase} from "../supabase";
=======
import supabase from "../supabase";
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

// Get all jobs
export const getJobs = async () => {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .order("id", { ascending: false });

  if (error) throw error;
  return data;
};

// Add Job
<<<<<<< HEAD
export const createJob = async (job) => {
=======
export const addJob = async (job) => {
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79
  const { data, error } = await supabase
    .from("jobs")
    .insert(job)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Update Job
export const updateJob = async (id, job) => {
  const { data, error } = await supabase
    .from("jobs")
    .update(job)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Delete Job
export const deleteJob = async (id) => {
  const { error } = await supabase
    .from("jobs")
    .delete()
    .eq("id", id);

  if (error) throw error;
};