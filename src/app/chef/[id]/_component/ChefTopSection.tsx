import { UserAndRelationCount } from "@/types";

import { ImageComponent } from "@/components/Image";

import { ChefFollowButton } from "./ChefFollowButton";

export const ChefTopSection = ({ chef }: { chef: UserAndRelationCount }) => {
  return (
    <div className="space-y-2 p-4">
      <div className="flex items-center justify-between">
        <div className="mr-2">
          <h3 className="text-title font-bold">{chef.name}</h3>
          <span className="line-clamp-1 text-small">{chef.id}</span>
        </div>
        <ImageComponent src={chef.image_url} alt={`${chef.name}の画像`} width="xSmall" ratio="1/1" isCircle isShadow />
      </div>

      <p className="line-clamp-3">{chef.description}</p>
      <div className="text-small">
        <span className="mr-2">{chef._count.Recipe} レシピ</span>
        <span>{chef._count.followed} フォロワー</span>
      </div>
      <ChefFollowButton />
    </div>
  );
};
