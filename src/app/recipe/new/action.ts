"use server";

import { NewRecipeSchemaType } from "@/app/recipe/new/type";

export async function action(data: NewRecipeSchemaType) {
  console.log(data);
}
