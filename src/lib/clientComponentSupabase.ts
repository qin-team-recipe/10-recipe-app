import { type Database } from "@/types/schema";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const clientComponentSupabase = createClientComponentClient<Database>();
