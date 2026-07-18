import { supabase } from "../supabase";

// =========================
// Get Logged-in User Profile
// =========================
export async function getProfile() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

// =========================
// Save / Update Profile
// =========================
export async function saveProfile(profile) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User not logged in");

  const profileData = {
    id: user.id,
    email: user.email,
    ...profile,
  };

  const { data, error } = await supabase
    .from("profiles")
    .upsert(profileData)
    .select()
    .maybeSingle();

  if (error) throw error;

  return data;
}