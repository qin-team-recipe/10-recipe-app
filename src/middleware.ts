import { NextRequest, NextResponse } from "next/server";

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "./types/schema";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  await supabase.auth.getSession();
  return res;
}
