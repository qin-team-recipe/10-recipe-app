import { mockDataNewRecipe } from "@/mock/NewRecipe";

import { Icon } from "@/components/icon/Icon";
import { ImageCarousel, ImageComponent } from "@/components/image";
import { AddButton } from "@/app/recipe/new/_components/AddButton";
import { IngredientListItem } from "@/app/recipe/new/_components/IngredientListItem";
import { RecipeStepItem } from "@/app/recipe/new/_components/RecipeStepItem";

const Page = () => {
  const titleClass = "mb-1 ml-4 font-bold text-black";
  return (
    <div>
      <header className="flex items-center justify-between border-b border-lightGray px-3 py-4">
        <Icon type="CloseButton" />
        <div className="flex items-center gap-4 font-bold">
          <button className="text-gray">下書き</button>
          <button className="text-tomato">作成する</button>
        </div>
      </header>
      <div className="mb-12 mt-5 flex flex-col gap-8">
        <div>
          <h3 className={titleClass}>レシピ名</h3>
          <input
            className="w-full border-y border-lightGray py-3 pl-5 outline-none"
            type="text"
            placeholder="例：肉じゃが"
          />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <h3 className={titleClass}>材料 / 2人前</h3>
            <Icon type="Edit" />
          </div>
          <div className="border-y border-lightGray">
            {mockDataNewRecipe.material.items.map((item) => (
              <IngredientListItem title={item.title} key={item.id} url="/" />
            ))}
          </div>
          <AddButton title="材料を追加する" />
        </div>
        <div>
          <h3 className={titleClass}>作り方</h3>
          <div className="border-y border-lightGray">
            {mockDataNewRecipe.recipeStep.items.map((item, i) => (
              <RecipeStepItem
                description={item.description}
                supplement={item.supplement}
                stepNumber={i + 1}
                key={item.id}
              />
            ))}
          </div>
          <AddButton title="工程を追加する" />
        </div>
        <div>
          <h3 className={titleClass}>画像</h3>
          <ImageCarousel>
            {mockDataNewRecipe.image.items.map((item) => (
              <ImageComponent src={item.image_url} key={item.id} alt="" width="small" ratio="1/1" isRounded />
            ))}
          </ImageCarousel>
          <AddButton title="画像を追加する" />
        </div>
        <div>
          <h3 className={titleClass}>リンク</h3>
          <div className="border-y border-lightGray">
            {mockDataNewRecipe.link.items.map((item) => (
              <IngredientListItem title={item.url} url={item.url} isExternalLink key={item.id} />
            ))}
          </div>
          <AddButton title="リンクを追加する" />
        </div>
      </div>
    </div>
  );
};

export default Page;
