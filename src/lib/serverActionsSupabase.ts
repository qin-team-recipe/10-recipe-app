import { cookies } from "next/headers";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

export const serverActionsSupabase = createServerActionClient({ cookies });
