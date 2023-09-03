"use client";

import SupabaseAuth from "./SupabaseAuth";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SupabaseAuth>{children}</SupabaseAuth>
    </>
  );
};
