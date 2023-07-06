import { NextPage } from "next";

import { Button, ButtonToggle } from "@/components/button";

type Mock = {};

const Home: NextPage = () => {
  const mockData: Mock[] = [];

  return (
    <>
      <small>お気に入り追加、フォローする用トグルボタン</small>
      <div className="py-1">
        <ButtonToggle initialText="お気に入りに追加" clickedText="お気に入りから削除" isChecked />
      </div>
      <div className="py-1">
        <ButtonToggle initialText="フォローする" clickedText="フォロー中" />
      </div>
      <br />
      <hr />
      <small>その他のボタン</small>
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
        <Button bgColor="none" fontColor="tomato" size="medium" width="medium" isBorder>
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
