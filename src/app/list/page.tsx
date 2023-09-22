import { getAuthDataForServer } from "@/lib/getAuthData/getAuthDataForServer";
import { MockMyList, MockRecipeList } from "@/mock";

import { Header } from "@/components/Header/Header";
import { ListShoppingHeader } from "@/components/list/ListShoppingHeader";
import { ListShoppingItem } from "@/components/list/ListShoppingItem";
import { Login } from "@/components/Login/Login";

const ListPage = async () => {
  const { session } = await getAuthDataForServer();

  return (
    <>
      <Header position="center" title="買い物リスト" />
      {session ? (
        <div>
          <div>
            <ListShoppingHeader title="じぶんメモ" />
            <div>
              {MockMyList.map((item) => (
                <ListShoppingItem key={item.id} id={item.id} name={item.name} is_checked={item.is_checked} />
              ))}
            </div>
          </div>
          <div>
            <ListShoppingHeader title="長いレシピ名長いレシピ名長いレシピ名長いレシピ名長いレシピ名長いレシピ名" />
            <div>
              {MockRecipeList.map((item) => (
                <ListShoppingItem key={item.id} id={item.id} name={item.name} is_checked={item.is_checked} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Login imageType="shopping" />
      )}
    </>
  );
};

export default ListPage;
