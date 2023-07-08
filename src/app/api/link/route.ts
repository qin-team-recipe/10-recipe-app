import { NextResponse } from "next/server";

import { routeHandlerSupabase } from "@/lib/routeHandlerSupabase";

export async function GET(request: Request) {
  const supabase = routeHandlerSupabase;
  const { searchParams } = new URL(request.url);
  const id = await searchParams.get("id");

  if (id) {
    const { data } = await supabase.from("link").select("*").eq("id", id);
    return NextResponse.json(data);
  } else {
    const { data } = await supabase.from("link").select("*");
    return NextResponse.json(data);
  }
}
