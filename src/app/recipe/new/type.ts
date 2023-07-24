import { z } from "zod";

export const newRecipeSchema = z.object({
  name: z.string(),
  ingredients: z.object({ title: z.string() }).array(),
  //   instruction: z.object({ title: z.string() }).array(),
  //   imageUrl: z.string(),
  description: z.string(),
  link: z.object({ title: z.string() }).array(),
});

export type NewRecipeSchemaType = z.infer<typeof newRecipeSchema>;
