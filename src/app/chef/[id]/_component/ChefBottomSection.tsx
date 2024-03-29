import Link from "next/link";

import { ImageComponent, ImageGrid } from "@/components/Image";
import { TabLinks, type Tab } from "@/components/TabLinks/TabLinks";
import { type RecipeList } from "@/app/api/recipe/route";

type ChefBottomSectionProps = {
  tabs: Tab[];
  recipes: RecipeList;
};

export const ChefBottomSection: React.FC<ChefBottomSectionProps> = (props) => {
  return (
    <div>
      <TabLinks tabs={props.tabs} />
      <ImageGrid isTwoColumns addClassNames="py-4">
        {props.recipes.map((recipe) => (
          <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
            <ImageComponent
              src={recipe.image_url || undefined}
              alt={`${recipe.title}の画像`}
              favNum={recipe._count.Favorite}
              width="full"
              ratio="1/1"
              isRounded
              isShadow
              title={recipe.title}
              description={recipe.description || undefined}
            />
          </Link>
        ))}
      </ImageGrid>
    </div>
  );
};
