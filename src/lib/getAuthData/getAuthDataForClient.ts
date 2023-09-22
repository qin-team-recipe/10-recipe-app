import { clientComponentSupabase } from "@/lib/clientComponentSupabase";

import { Chef } from "@/app/api/chef/[id]/route";

export const getAuthDataForClient = async () => {
  const {
    data: { session },
  } = await clientComponentSupabase.auth.getSession();

  const userResponse = session?.user.id
    ? await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef/${session.user.id}`, { cache: "no-store" })
    : undefined;
  const userData: Chef | undefined = await userResponse?.json();

  return { session, userData };
};
