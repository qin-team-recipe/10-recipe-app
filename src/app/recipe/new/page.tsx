import { mockDataNewRecipe } from "@/mock/NewRecipe";

import { CloseButton, Edit, Plus } from "@/components/icons";
import { ImageCarousel, ImageComponent } from "@/components/image";
import { AddButton } from "@/app/recipe/new/_components/AddButton";
import { IngredientListItem } from "@/app/recipe/new/_components/IngredientListItem";
import { RecipeStepItem } from "@/app/recipe/new/_components/RecipeStepItem";

const Page = () => {
  const titleClass = "mb-1 ml-4 font-bold text-black";
  return (
    <div>
      <div className="flex items-center justify-between border-b border-lightGray px-3 py-4">
        <CloseButton />
        <div className="flex items-center gap-4 font-bold">
          <button className="text-gray">下書き</button>
          <button className="text-tomato">作成する</button>
        </div>
      </div>
      <div className="mb-12 mt-5 flex flex-col gap-8">
        <div>
          <div className={titleClass}>レシピ名</div>
          <input
            className="w-full border-y border-lightGray py-3 pl-5 outline-none"
            type="text"
            placeholder="例：肉じゃが"
          />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <div className={titleClass}>材料 / 2人前</div>
            <Edit />
          </div>
          <div className="border-y border-lightGray">
            {mockDataNewRecipe.material.items.map((item) => (
              <IngredientListItem title={item.title} key={item.id} />
            ))}
          </div>
          <AddButton title={mockDataNewRecipe.material.buttonTitle} />
        </div>
        <div>
          <div className={titleClass}>作り方</div>
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
          <div className="ml-4 mt-2 flex items-center gap-1">
            <Plus />
            <p className="text-tomato">{mockDataNewRecipe.recipeStep.buttonTitle}</p>
          </div>
        </div>
        <div>
          <div className={titleClass}>画像</div>
          <ImageCarousel>
            {mockDataNewRecipe.image.items.map((item) => (
              <ImageComponent src={item.image_url} key={item.id} alt="" width="small" ratio="1/1" isRounded />
            ))}
          </ImageCarousel>
          <div className="ml-4 mt-2 flex items-center gap-1">
            <Plus />
            <p className="text-tomato">{mockDataNewRecipe.image.buttonTitle}</p>
          </div>
        </div>
        <div>
          <div className={titleClass}>リンク</div>
          <div className="border-y border-lightGray">
            {mockDataNewRecipe.link.items.map((item) => (
              <IngredientListItem title={item.url} external key={item.id} />
            ))}
          </div>
          <div className="ml-4 mt-2 flex items-center gap-1">
            <Plus />
            <p className="text-tomato">{mockDataNewRecipe.link.buttonTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
