import { Database } from "@/types/schema";

export type Chef = Database["public"]["Tables"]["chef"]["Row"];

export type Link = Database["public"]["Tables"]["link"]["Row"];

export type ChefWithLink = Chef & { link: Link[] };

export type Recipe = Database["public"]["Tables"]["recipe"]["Row"];

export type Ingredient = Database["public"]["Tables"]["ingredient"]["Row"];

export type Instruction = Database["public"]["Tables"]["instruction"]["Row"];

export type RecipeWithIngredientInstruction = Recipe & { ingredient: Ingredient[]; instruction: Instruction[] };
