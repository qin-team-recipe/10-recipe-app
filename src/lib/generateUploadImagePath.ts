/**
 *
 * クライアントコンポーネントのみ対応
 * ストレージに画像をアップロードし、画像のパスを返す
 *
 */

import { clientComponentSupabase } from "@/lib/clientComponentSupabase";

export const generateUploadImagePath = async (image: File | undefined) => {
  let imagePath: string | undefined;
  let imageUploadErrorFlg: boolean = false;

  // 画像がない場合は何も返さない
  if (!image) return { imagePath: undefined, errorMessage: undefined };

  const imageId = crypto.randomUUID();
  const filePath = `public/${imageId}`;
  const { data, error } = await clientComponentSupabase.storage.from("chefs").upload(filePath, image);

  if (error) {
    imageUploadErrorFlg = true;
  }

  if (data) {
    const imageParams = await clientComponentSupabase.storage.from("chefs").getPublicUrl(data.path);
    imagePath = imageParams.data.publicUrl;
  }
  return { imagePath, imageUploadErrorFlg };
};
