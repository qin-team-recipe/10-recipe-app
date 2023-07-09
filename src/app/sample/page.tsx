import { mockData } from "@/mock/SampleMockData";
import { Chef } from "@prisma/client";

import { ImageCarousel, ImageComponent, ImageGrid } from "@/components/image";

const SamplePage = async () => {
  // revalidateは何秒キャッシュされたデータを使うかの設定
  // 開発中はキャッシュが邪魔になるので1秒に設定
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef`, { next: { revalidate: 1 } });
  const chefs: Chef[] = await res.json();

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
