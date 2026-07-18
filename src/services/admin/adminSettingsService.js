<<<<<<< HEAD
import {supabase} from "../supabase";
=======
import supabase from "../supabase";
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

// Get current admin profile
export const getAdminProfile = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Admin not logged in");

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) throw error;

  return data;
};

// Update admin profile
export const updateAdminProfile = async (updates) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", user.id)
    .select()
    .single();

  if (error) throw error;

  return data;
};

// Logout
export const adminLogout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
};