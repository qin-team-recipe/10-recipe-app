import { getAuthDataForServer } from "@/lib/getAuthData/getAuthDataForServer";

import { Header } from "@/components/Header/Header";
import { Login } from "@/components/Login/Login";
import { IngredientsList } from "@/app/api/ingredients/route";
import { ShoppingListBody } from "@/app/list/_component/ShoppingListBody";

const ListPage = async () => {
  const { session, userData } = await getAuthDataForServer();

  const shoppingListRes = userData?.name
    ? await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ingredients?user_id=${userData?.id}`, {
        cache: "no-store",
      })
    : undefined;
  const shoppingList: IngredientsList = await shoppingListRes?.json();

  return (
    <>
      <Header position="center" title="買い物リスト" />
      {session ? (
        <ShoppingListBody userId={userData?.id} shoppingList={shoppingList} />
      ) : (
        <Login imageType="shopping" />
      )}
    </>
  );
};

export default ListPage;
