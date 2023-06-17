import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "../../../types/schema";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}
