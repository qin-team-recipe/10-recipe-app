import { NextPage } from "next";

import { Button, ButtonToggle } from "@/components/button";
import { ImageCarousel, ImageComponent, ImageGrid } from "@/components/image";

type Mock = {
  title: string;
  description?: string;
  favNum?: number;
  nameLabel?: string;
  src: string;
};

const Home: NextPage = () => {
  const mockData: Mock[] = [
    {
      title: "トマトとルッコラのマルゲリータトマトとルッコラのマルゲリータトマトとルッコラのマルゲリータ",
      description: "トマトとルッコラのマルゲリータトマトとルッコラのマルゲリータトマトとルッコラのマルゲリータ",
      favNum: 2000,
      nameLabel: "山田シェフ",
      src: "/images/sample_chef.jpg",
    },
    {
      title: "トマトとルッコラ",
      description: "トマトとルッコラのマルゲリータ",
      nameLabel: "武田シェフ",
      src: "/images/sample_chef.jpg",
    },
    ...[...Array(10)].map((_) => ({
      title: "トマトとルッコラのマルゲリータトマトとルッコラのマルゲリータトマトとルッコラのマルゲリータ",
      src: "/images/sample_chef.jpg",
    })),
  ];

  return (
    <>
      <ImageCarousel>
        {mockData.map((data, index) => (
          <ImageComponent
            key={`top-carousel-${index}`}
            title={data.title}
            alt={`${data.nameLabel || data.title}の画像`}
            description={data.description}
            nameLabel={data.nameLabel}
            src={data.src}
            isRounded
            ratio="3/4"
            width="large"
            addClassNames="mb-8"
          />
        ))}
      </ImageCarousel>
      <ImageCarousel>
        {mockData.map((data, index) => (
          <ImageComponent
            key={`bottom-carousel-${index}`}
            alt={`${data.nameLabel || data.title}の画像`}
            description={data.description || "シェフ"}
            descriptionAlign="center"
            src={data.src}
            isCircle
            ratio="1/1"
            width="xSmall"
            addClassNames="mb-8"
          />
        ))}
      </ImageCarousel>
      <ImageGrid addClassNames="mb-8">
        {mockData.slice(0, 4).map((data, index) => (
          <ImageComponent
            key={`grid-${index}`}
            src={data.src}
            isRounded
            alt={`${data.title}の画像`}
            width="full"
            favNum={data.favNum}
            ratio="1/1"
            nameLabel={data.nameLabel}
          />
        ))}
      </ImageGrid>
      <ImageComponent
        src="/images/sample_chef.jpg"
        alt="シェフの画像"
        width="full"
        nameLabel="たけちゃんシェフ"
        ratio="3/4"
      />
      <div className="my-3">
        <ButtonToggle initialText="お気に入りに追加" clickedText="お気に入り追加済み" />
        <ButtonToggle initialText="フォローする" clickedText="フォロー中" />
        <div className="flex justify-around">
          <Button bgColor="blue" fontSize="medium" hoverAction>
            Googleログイン
          </Button>
          <Button bgColor="black" fontSize="medium" hoverAction>
            Appleログイン
          </Button>
        </div>
        <div className="flex justify-around">
          <Button fontSize="medium" width="medium" height="small">
            お気に入りに追加
          </Button>
          <Button bgColor="none" fontColor="black" fontSize="medium" width="medium" height="small" isBorder>
            レシピを編集
          </Button>
        </div>
        <div className="flex justify-around">
          <Button fontSize="medium" width="medium">
            保存する
          </Button>
          <Button bgColor="none" fontColor="tomato" fontSize="medium" width="medium" isBorder>
            削除する
          </Button>
        </div>
        <div className="flex justify-around">
          <Button fontSize="medium" width="medium">
            保存する
          </Button>
          <Button bgColor="none" fontColor="tomato" fontSize="medium" width="medium" isBorder>
            キャンセル
          </Button>
        </div>
        <Button bgColor="none" fontColor="black" fontSize="medium" width="large" height="small" isBorder>
          プロフィールを編集
        </Button>
        <Button fontSize="medium" width="medium" height="large" isRounded isShadow>
          マイレシピを追加する
        </Button>
      </div>
    </>
  );
};

export default Home;
