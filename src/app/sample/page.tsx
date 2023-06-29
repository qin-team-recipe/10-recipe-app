import { NextPage } from "next";

import { Chef } from "@/types/tableType";

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
  // サーバーコンポーネントの場合
  const getChef = async () => {
    const data = await fetch("http://localhost:3000/api/chef");
    // 型はtableType.tsにapiのパスと同じ名前の型があるのでそれを使用する
    const chef: Chef = await data.json();
    return chef;
  };
  // const Home: NextPage = () => {　とすると型エラーになるので、関数を定義してそこで非同期処理をしている
  const chef = getChef();
  console.log(chef);

  // クライアントコンポーネントの場合
  // const [state, setState] = useState<Chef>();
  // useEffect(() => {
  //   const fetchData = async () => {
  /* { cache: "no-cache" }としないとSSGのような挙動になりデータがキャッシュされる
   今後、データの追加を試したいときに、キャッシュされているとデータが追加されないのでこのようにすることでキャッシュを無効化して確認ができる */
  //     const data = await fetch("http://localhost:3000/api/chef", { cache: "no-cache" });
  //     const chef = await data.json();
  //     setState(chef);
  //   };
  //   fetchData();
  // }, []);
  // console.log(state);

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
    </>
  );
};

export default Home;
