

import { supabase } from "../supabase";

export const getTotalApplications = async () => {
  const { count, error } = await supabase
    .from("applications")
    .select("*", { count: "exact", head: true });

  if (error) throw error;
  return count || 0;
};

export const getTotalSavedJobs = async () => {
  const { count, error } = await supabase
    .from("saved_jobs")
    .select("*", { count: "exact", head: true });

  if (error) throw error;
  return count || 0;
};

export const getTotalInterviews = async () => {
  const { count, error } = await supabase
    .from("interviews")
    .select("*", { count: "exact", head: true });

  if (error) throw error;
  return count || 0;
};

export const getLatestATSScore = async () => {
  const { data, error } = await supabase
    .from("resume_analysis")
    .select("ats_score")
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) throw error;

  return data?.[0]?.ats_score || 0;
};
