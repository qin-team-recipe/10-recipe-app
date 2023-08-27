import { type UserAndRelationCount } from "@/types";

import { ChefTopSection } from "./_component/ChefTopSection";

const ChefLayout = async ({ children, params }: { children: React.ReactNode; params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef/${id}`, { next: { revalidate: 10 } });
  const chef: UserAndRelationCount = await res.json();

  return (
    <div>
      <ChefTopSection chef={chef} />
      {children}
    </div>
  );
};

export default ChefLayout;
