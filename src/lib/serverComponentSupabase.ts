// eslint-disable-next-line simple-import-sort/imports
import { cookies } from "next/headers";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const serverComponentSupabase = createServerComponentClient({ cookies });
