import { ImageComponent } from "@/components/Image";
import { type Chef } from "@/app/api/chef/[id]/route";
import { TopBar } from "@/app/chef/[id]/_component/TopBar";

import { ChefFollowButton } from "./_component/ChefFollowButton";

const ChefLayout = async ({ children, params }: { children: React.ReactNode; params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef/${id}`, { cache: "no-store" });
  const chef: Chef = await res.json();

  return (
    <div>
      <div className="space-y-2 p-4">
        <TopBar />
        <div className="flex items-center justify-between">
          <div className="mr-2">
            <h3 className="text-title font-bold">{chef.name}</h3>
            <span className="line-clamp-1 text-small">{chef.id}</span>
          </div>
          <ImageComponent
            src={chef.image_url}
            alt={`${chef.name}の画像`}
            width="xSmall"
            ratio="1/1"
            isCircle
            isShadow
          />
        </div>

        <p className="line-clamp-3">{chef.description}</p>
        <div className="text-small">
          <span className="mr-2">{chef._count.Recipe} レシピ</span>
          <span>{chef._count.followed} フォロワー</span>
        </div>
        <ChefFollowButton />
      </div>
      {children}
    </div>
  );
};

export default ChefLayout;
