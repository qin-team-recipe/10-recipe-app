import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "../types/schema";

export const clientComponentSupabase = createClientComponentClient<Database>();
