import cc from "classcat";

import { Edit, Plus } from "@/components/icons";
import { ImageCarousel, ImageComponent } from "@/components/image";
import { AddButton } from "@/app/recipe/new/_components/AddButton";
import { Header } from "@/app/recipe/new/_components/Header";
import { IngredientListItem } from "@/app/recipe/new/_components/IngredientListItem";
import { RecipeStepItem } from "@/app/recipe/new/_components/RecipeStepItem";
import { newRecipeData } from "@/app/recipe/new/data";

const Page = () => {
  const TitleClass = cc(["mb-1 ml-4 font-bold text-black"]);

  return (
    <div>
      <Header />
      <div className="mb-12 mt-5 flex flex-col gap-8">
        <div>
          <div className={TitleClass}>{newRecipeData.recipe.title}</div>
          <input
            className="w-full border-y border-lightGray py-3 pl-5 outline-none"
            type="text"
            placeholder={newRecipeData.recipe.placeholder}
          />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <div className={TitleClass}>{newRecipeData.material.title}</div>
            <Edit />
          </div>
          <div className="border-y border-lightGray">
            {newRecipeData.material.items.map((item, i) => (
              <IngredientListItem title={item.title} supplement={item.supplement} key={i} />
            ))}
          </div>
          <AddButton title={newRecipeData.material.buttonTitle} />
        </div>
        <div>
          <div className={TitleClass}>{newRecipeData.recipeStep.title}</div>
          <div className="border-y border-lightGray">
            {newRecipeData.recipeStep.items.map((item, i) => (
              <RecipeStepItem description={item.description} supplement={item.supplement} stepNumber={i + 1} key={i} />
            ))}
          </div>
          <div className="ml-4 mt-2 flex items-center gap-1">
            <Plus />
            <p className="text-tomato">{newRecipeData.recipeStep.buttonTitle}</p>
          </div>
        </div>
        <div>
          <div className={TitleClass}>{newRecipeData.image.title}</div>
          <ImageCarousel>
            {newRecipeData.image.items.map((src, i) => (
              <ImageComponent src={src} key={i} alt="" width="small" ratio="1/1" isRounded />
            ))}
          </ImageCarousel>
          <div className="ml-4 mt-2 flex items-center gap-1">
            <Plus />
            <p className="text-tomato">{newRecipeData.image.buttonTitle}</p>
          </div>
        </div>
        <div>
          <div className={TitleClass}>{newRecipeData.link.title}</div>
          <div className="border-y border-lightGray">
            {newRecipeData.link.items.map((link, i) => (
              <IngredientListItem link={link} key={i} />
            ))}
          </div>
          <div className="ml-4 mt-2 flex items-center gap-1">
            <Plus />
            <p className="text-tomato">{newRecipeData.link.buttonTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
