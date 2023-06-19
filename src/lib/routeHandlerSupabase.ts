import { cookies } from "next/headers";

import type { Database } from "@/types/schema";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const routeHandlerSupabase = createRouteHandlerClient<Database>({ cookies });
