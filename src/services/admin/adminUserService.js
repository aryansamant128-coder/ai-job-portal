<<<<<<< HEAD
import {supabase} from "../supabase";
=======
import supabase from "../supabase";
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

// Get all users
export const getUsers = async () => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("full_name", { ascending: true });

  if (error) throw error;

  return data;
};

// Delete user
export const deleteUser = async (id) => {
  const { error } = await supabase
    .from("profiles")
    .delete()
    .eq("id", id);

  if (error) throw error;
};

// Update user
export const updateUser = async (id, updates) => {
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
};