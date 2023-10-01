import { z } from "zod";

// ユーザー登録時のバリデーション
export const InputNameSchema = z.object({
  name: z.string().min(1, "必須項目です").max(20, "ニックネームは20文字以内で入力してください"),
});
export type InputNameSchemaType = z.infer<typeof InputNameSchema>;

// ユーザーアップデート時のバリデーション
export const UpdateUserPostSchema = InputNameSchema.extend({
  id: z.string(),
  image_url: z.string().optional(),
  description: z.string().max(100, "自己紹介は100文字以内で入力してください").nullable(),
  link: z.string().array().optional(),
});
export type UpdateUserPostSchemaType = z.infer<typeof UpdateUserPostSchema>;

// レシピ登録、更新時のバリデーション
export const CreateRecipeSchema = z.object({
  title: z.string().min(1, "必須項目です").max(30, "レシピ名は30文字以内で入力してください"),
  user_id: z.string().min(1, "必須項目です"),
  description: z.string().max(100, "説明は100文字以内で入力してください").optional(),
  image_url: z.string().optional(),
  instructions: z.string().array().optional(),
  quantity: z.number().min(1, "必須項目です"),
  ingredient: z.string().array().optional(),
  link: z.string().array().optional(),
});
export type CreateRecipeSchemaType = z.infer<typeof CreateRecipeSchema>;
