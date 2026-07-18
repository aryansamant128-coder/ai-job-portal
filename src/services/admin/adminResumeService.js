<<<<<<< HEAD
import {supabase} from "../supabase";
=======
import supabase from "../supabase";
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

// Fetch all resume analysis records
export const getResumeAnalysis = async () => {
  const { data, error } = await supabase
    .from("resume_analysis")
    .select("*")
    .order("id", { ascending: false });

  if (error) throw error;

  return data;
};

// Delete resume analysis
export const deleteResumeAnalysis = async (id) => {
  const { error } = await supabase
    .from("resume_analysis")
    .delete()
    .eq("id", id);

  if (error) throw error;
};