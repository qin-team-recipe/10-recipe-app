import Link from "next/link";

import { RecipeAndFavCount } from "@/types";

import { ImageComponent, ImageGrid } from "@/components/Image";
import { TabLinks, type Tab } from "@/components/TabLinks";

type ChefBottomSectionProps = {
  tabs: Tab[];
  recipes: RecipeAndFavCount[];
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
