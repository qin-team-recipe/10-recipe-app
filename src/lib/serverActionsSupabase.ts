// eslint-disable-next-line simple-import-sort/imports
import { cookies } from "next/headers";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

export const serverActionsSupabase = createServerActionClient({ cookies });
