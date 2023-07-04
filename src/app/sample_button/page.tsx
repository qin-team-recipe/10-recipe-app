import { NextPage } from "next";

import { Button } from "@/components/button";

type Mock = {};

const Home: NextPage = () => {
  const mockData: Mock[] = [];

  return (
    <>
      <div className="py-1">
        <Button bgColor="tomato" fontColor="white" size="small">
          お気に入りに追加
        </Button>
      </div>
      <div className="py-1">
        <Button bgColor="white" fontColor="tomato" size="small" isBorder>
          お気に入りから削除
        </Button>
      </div>
      <div className="py-1">
        <Button bgColor="black" fontColor="white" size="medium" hoverAction>
          Appleログイン
        </Button>
      </div>
      <div className="py-1">
        <Button bgColor="tomato" fontColor="white" size="medium" width="medium">
          登録する
        </Button>
      </div>
      <div className="py-1">
        <Button bgColor="none" fontColor="tomato" size="medium" width="medium">
          ログアウト
        </Button>
      </div>
      <div className="py-1">
        <Button bgColor="tomato" fontColor="white" size="medium" width="medium" isRounded isShadow>
          自作レシピを追加する
        </Button>
      </div>
      <div className="py-1">
        <Button bgColor="tomato" fontColor="white" size="large" width="large">
          largeサンプル
        </Button>
      </div>
    </>
  );
};

export default Home;
