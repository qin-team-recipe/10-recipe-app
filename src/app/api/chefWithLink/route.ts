import { NextResponse } from "next/server";

import { routeHandlerSupabase } from "@/lib/routeHandlerSupabase";

export async function GET(request: Request) {
  const supabase = routeHandlerSupabase;
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const { data } = await supabase.from("chef").select("*,link(*)").eq("id", id);
    return NextResponse.json(data);
  } else {
    const { data } = await supabase.from("chef").select("*,link(*)");
    return NextResponse.json(data);
  }
}
