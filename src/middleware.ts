import { NextRequest, NextResponse } from "next/server";

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "./types/schema";

export async function middleware(req: NextRequest) {
  // このやり方でURLが取得できるらしい
  //https://github.com/vercel/next.js/issues/43704
  // const requestHeaders = new Headers(req.headers);
  // Store current request pathname in a custom header
  // requestHeaders.set("x-pathname", req.nextUrl.pathname);
  const res = NextResponse
    .next
    // {
    // request: {
    //   // Apply new request headers
    //   headers: requestHeaders,
    // },
    // }
    ();
  const supabase = createMiddlewareClient<Database>({ req, res });
  await supabase.auth.getSession();
  return res;
}
