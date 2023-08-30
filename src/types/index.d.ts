import { Ingredient, Ingredients, Recipe, User } from "@prisma/client";

/* eslint-disable no-unused-vars */

declare type UserAndRelationCount = User & {
  _count: {
    followed: number;
    Recipe: number;
  };
};

declare type RecipeAndFavCount = Recipe & {
  _count: {
    Favorite: number;
  };
};

declare type RecipeAndUser = RecipeAndFavCount & { user: Pick<User, "id" | "name" | "image_url"> };

declare type IngredientsAndIngredient = Ingredients & {
  ingredient: Pick<Ingredient, "id" | "name" | "step" | "is_checked">[];
};
