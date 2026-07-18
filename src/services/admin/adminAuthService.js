<<<<<<< HEAD
import { supabase } from "../supabase";

// ================= LOGIN =================

export const adminLogin = async (email, password) => {
=======
import supabase from "../supabase";

export const adminLogin = async (email, password) => {
  // Sign in with Supabase Auth
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79
  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

<<<<<<< HEAD
  if (authError) throw authError;

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", authData.user.id)
    .single();

  if (profileError) throw profileError;

=======
  if (authError) {
    throw new Error(authError.message);
  }

  // Fetch profile
  const { data: profile, error: profileError } =
    await supabase
      .from("profiles")
      .select("*")
      .eq("id", authData.user.id)
      .single();

  if (profileError) {
    throw new Error(profileError.message);
  }

  // Check role
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79
  if (profile.role !== "admin") {
    await supabase.auth.signOut();
    throw new Error("Access denied. Admin only.");
  }

  return profile;
};

<<<<<<< HEAD
// ================= CURRENT ADMIN =================
=======
export const adminLogout = async () => {
  await supabase.auth.signOut();
};
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

export const getCurrentAdmin = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

<<<<<<< HEAD
  const { data, error } = await supabase
=======
  const { data } = await supabase
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

<<<<<<< HEAD
  if (error) throw error;

  return data;
};

// ================= PROFILE =================

export const getAdminProfile = async () => {
  return await getCurrentAdmin();
};

export const updateAdminProfile = async (updates) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Admin not logged in");

  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", user.id)
    .select()
    .single();

  if (error) throw error;

  return data;
};

// ================= LOGOUT =================

export const adminLogout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
=======
  return data;
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79
};