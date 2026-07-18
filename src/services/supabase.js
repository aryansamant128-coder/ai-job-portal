import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "YOUR_PROJECT_URL";
const supabaseAnonKey = "YOUR_ANON_KEY";

export const supabase = createClient('https://ksyfmjrdauiwrbnuftjl.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzeWZtanJkYXVpd3JibnVmdGpsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzI2NzYyMCwiZXhwIjoyMDk4ODQzNjIwfQ.3iC-uEPJ9Xvg-VJ-PnP08cwkqJIenXcvf5ZnH4pK0s8');
