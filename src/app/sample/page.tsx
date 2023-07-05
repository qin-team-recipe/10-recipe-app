import { NextPage } from "next";

import { Icon } from "@/components/icon/Icon";
import { ImageCarousel, ImageComponent, ImageGrid } from "@/components/image";

type Mock = {
  title: string;
  description?: string;
  favNum?: number;
  nameLabel?: string;
  src: string;
};

const SamplePage: NextPage = () => {
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
      <div className="m-4 rounded-md border border-black p-2">
        <h3 className="mb-2 text-large font-bold">アイコン</h3>
        <div className="rounded-md bg-gray p-4 text-white">
          1. アイコンSVGをtsxとして作成し src/app/component/icon/assets に追加
          <br />
          2. 追加する際にSVGのwidth・height・strokeを削除
          <br />
          3. src/app/component/icon/Icon.tsx の IconType・iconElmに追加
          <br />
          4. うまく表示されない場合は削除したstrokeを復活させるなど色々と調整。使用する際はcolorにorganicColorを指定
        </div>
        <div>
          <p>Size</p>
          <Icon type="account" size="small" />
          <Icon type="account" size="medium" />
          <Icon type="account" size="large" />
        </div>
        <hr />
        <div>
          <p>Color</p>
          <Icon type="account" />
          <Icon type="account" color="gray" />
          <Icon type="account" color="lightGray" />
          <Icon type="account" color="tomato" />
          <Icon type="account" color="white" addClassNames="bg-black" />
        </div>
        <hr />
        <div>
          <p>Type</p>
          <Icon type="account" />
          <Icon type="arrowLeft" />
          <Icon type="check" color="organicColor" />
          <Icon type="circle" color="tomato" />
          <Icon type="close" />
          <Icon type="favorite" />
          <Icon type="menu" />
          <Icon type="plus" />
          <Icon type="search" />
          <Icon type="shoppingCart" />
          <Icon type="siteLogo" />
        </div>
      </div>
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
    </>
  );
};

export default SamplePage;
