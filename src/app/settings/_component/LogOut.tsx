"use client";

import { useRouter } from "next/navigation";

import { clientComponentSupabase } from "@/lib/clientComponentSupabase";

import { Icon } from "@/components/Icon/Icon";

export const LogOut: React.FC = () => {
  const router = useRouter();
  const handleClick = async () => {
    await clientComponentSupabase.auth.signOut();
    router.refresh();
    router.push("/");
  };

  return (
    <button className="flex w-full items-center justify-between" onClick={handleClick}>
      ログアウト
      <Icon type="Logout" color="gray" />
    </button>
  );
};
