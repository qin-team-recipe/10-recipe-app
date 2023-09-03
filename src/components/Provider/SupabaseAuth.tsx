"use client";

// import { useEffect, useState } from "react";

// import { clientComponentSupabase } from "@/lib/clientComponentSupabase";
// import { User } from "@supabase/supabase-js";

export const SupabaseAuth = ({ children }: { children: React.ReactNode }) => {
  // const [user, setUser] = useState<User>();

  // useEffect(() => {
  //   const getSession = async () => {
  //     const { data } = await clientComponentSupabase.auth.getSession();
  //     setUser(data.session?.user);
  //   };
  //   getSession();

  //   const { data: subscription } = clientComponentSupabase.auth.onAuthStateChange((event, session) => {
  //     setUser(session?.user);
  //   });

  //   return () => {
  //     subscription.subscription.unsubscribe();
  //   };
  // }, []);

  return <>{children}</>;
};

export default SupabaseAuth;
