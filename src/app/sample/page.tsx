import { mockData } from "@/mock/SampleMockData";
import { User } from "@prisma/client";

import { Button, ButtonToggle } from "@/components/button";
import { Icon } from "@/components/icon/Icon";
import { ImageCarousel, ImageComponent, ImageGrid } from "@/components/image";

// fetchする場合はNextPage型は削除してasyncをつける
const SamplePage = async () => {
  // サーバーコンポーネントの場合
  // revalidateは何秒キャッシュされたデータを使うかの設定
  // 開発中はキャッシュが邪魔になるので1秒に設定
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef`, { next: { revalidate: 1 } });
  const chefs: User[] = await res.json();

  return (
    <>
      <p className="mb-2 pl-4 text-large font-bold">GETしたデータをmapで表示させる場合</p>
      <ImageCarousel>
        {chefs.map((chef) => (
          <ImageComponent
            key={chef.id}
            src={chef.image_url}
            alt={`${chef.name}の画像`}
            nameLabel={chef.name}
            ratio="3/4"
            width="large"
            addClassNames="mb-4"
          />
        ))}
      </ImageCarousel>
      <hr className="mb-4" />
      <div className="m-4 rounded-md border border-black p-2">
        <h3 className="mb-2 text-large font-bold">アイコン</h3>
        <div className="rounded-md bg-gray p-4 text-white">
          <p className="text-large font-bold">
            https://tabler-icons-react.vercel.app/ に存在するアイコンを使用する場合
          </p>
          <br />
          1. アイコンコンポーネント内でアイコンをimport
          <br />
          2. 既存のアイコンに倣ってIconType・iconElmなどに必要な値を追加
          <br />
          <br />
          <p className="text-large font-bold">
            https://tabler-icons-react.vercel.app/ に存在しないアイコンを使用する場合
          </p>
          <br />
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
          <Icon type="UserCircle" size="small" />
          <Icon type="UserCircle" size="medium" />
          <Icon type="UserCircle" size="large" />
        </div>
        <hr />
        <div>
          <p>Color</p>
          <Icon type="UserCircle" />
          <Icon type="UserCircle" color="gray" />
          <Icon type="UserCircle" color="lightGray" />
          <Icon type="UserCircle" color="tomato" />
          <Icon type="UserCircle" color="white" addClassNames="bg-black" />
        </div>
        <hr />
        <div>
          <p>Type</p>
          <Icon type="UserCircle" />
          <Icon type="ArrowLeft" />
          <Icon type="CircleCheck" color="organicColor" />
          <Icon type="Circle" color="tomato" />
          <Icon type="Heart" />
          <Icon type="Menu" />
          <Icon type="Plus" />
          <Icon type="Search" />
          <Icon type="ShoppingCart" />
          <Icon type="SiteLogo" isLocalSvg />
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
      <ImageGrid isTwoColumns addClassNames="mb-8">
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

export default SamplePage;
