import { supabase } from "../supabase";
export async function getUpcomingInterviews() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("interviews")
    .select(`
      id,
      interview_date,
      interview_time,
      mode,
      meeting_link,
      applications!inner (
        id,
        user_id,
        status,
        jobs (
          title,
          company,
          location
        )
      )
    `)
    .eq("applications.user_id", user.id);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}