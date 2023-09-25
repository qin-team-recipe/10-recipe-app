import { getAuthDataForServer } from "@/lib/getAuthData/getAuthDataForServer";

import { Button } from "@/components/Button";
import { ImageComponent } from "@/components/Image";
import { type Chef } from "@/app/api/chef/[id]/route";
import { TopBar } from "@/app/chef/[id]/_component/TopBar";

import { ChefFollowButton } from "./_component/ChefFollowButton";

const ChefLayout = async ({ children, params }: { children: React.ReactNode; params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef/${id}`, { cache: "no-store" });
  const chef: Chef = await res.json();

  // ログインユーザー本人の画面かどうか
  const { userData } = await getAuthDataForServer();
  const isSelfUser = userData?.id === id;

  return (
    <div className="relative min-h-screen w-full">
      <div className="space-y-2 p-4">
        {isSelfUser && <TopBar />}
        <div className="flex items-center justify-between">
          <div className="mr-2">
            <h3 className="text-title font-bold">{chef.name}</h3>
            <span className="line-clamp-1 text-small">{chef.id}</span>
          </div>
          {!isSelfUser && (
            <ImageComponent
              src={chef.image_url}
              alt={`${chef.name}の画像`}
              width="xSmall"
              ratio="1/1"
              isCircle
              isShadow
            />
          )}
        </div>

        <p className="line-clamp-3">{chef.description}</p>
        <div className="text-small">
          <span className="mr-2">{chef._count.Recipe} レシピ</span>
          <span>{chef._count.followed} フォロワー</span>
        </div>
        {isSelfUser ? (
          <Button buttonColor="white" addClassNames="block text-center" href="/account">
            プロフィールを編集
          </Button>
        ) : (
          <ChefFollowButton loginUserId={userData?.id} targetUserId={id} />
        )}
      </div>
      {children}
      {isSelfUser && (
        <Button
          buttonColor="tomato"
          href="/"
          addClassNames="fixed bottom-6 left-1/2 ml-0 -translate-x-1/2 rounded-2xl px-4 py-1.5 shadow drop-shadow-md sm:left-auto sm:ml-14 sm:translate-x-1/2"
        >
          <span className="font-bold">マイレシピ</span>を追加する
        </Button>
      )}
    </div>
  );
};

export default ChefLayout;
