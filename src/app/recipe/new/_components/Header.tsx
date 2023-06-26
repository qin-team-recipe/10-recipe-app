import { CloseButton } from "@/components/icons";
import { newRecipeData } from "@/app/recipe/new/data";

export const Header = () => {
  return (
    <div className="flex items-center justify-between border-b border-lightGray px-3 py-4">
      <CloseButton />
      <div className="flex items-center gap-4 font-bold">
        <button className="text-gray">{newRecipeData.header.draft}</button>
        <button className="text-tomato">{newRecipeData.header.create}</button>
      </div>
    </div>
  );
};
