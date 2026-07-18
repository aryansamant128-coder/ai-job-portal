<<<<<<< HEAD
import { supabase } from "../supabase";
=======
import supabase from "../supabase";
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

// Get all applications
export const getApplications = async () => {
  const { data, error } = await supabase
<<<<<<< HEAD
    .from("admin_applications")   // <-- use the VIEW, not applications
=======
    .from("applications")
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79
    .select("*")
    .order("id", { ascending: false });

  if (error) throw error;

  return data;
};

// Update application status
export const updateApplicationStatus = async (id, status) => {
<<<<<<< HEAD
  const { error } = await supabase
    .from("applications")
    .update({ status })
    .eq("id", id);

  if (error) throw error;
=======
  const { data, error } = await supabase
    .from("applications")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79
};

// Delete application
export const deleteApplication = async (id) => {
  const { error } = await supabase
    .from("applications")
    .delete()
    .eq("id", id);

  if (error) throw error;
};