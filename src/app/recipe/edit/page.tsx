import { redirect } from "next/navigation";

import { getAuthDataForServer } from "@/lib/getAuthData/getAuthDataForServer";

import { RecipeForm } from "@/app/recipe/_component/RecipeForm";
import { RecipeFormHeader } from "@/app/recipe/_component/RecipeFormHeader";

const RecipeEditPage = async () => {
  const { userData } = await getAuthDataForServer();

  // ユーザー登録していなければトップページにリダイレクト
  if (!userData?.name) {
    redirect("/");
  }

  return (
    <div>
      <RecipeFormHeader />
      {/* 必須でuserIdが存在しているが、うまく推論できないので空文字を渡している */}
      <RecipeForm userId={userData?.id || ""} />
    </div>
  );
};

export default RecipeEditPage;
