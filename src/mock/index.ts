type Mock = {
  title: string;
  description?: string;
  favNum?: number;
  nameLabel?: string;
  src: string;
};

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

type MockTeam10 = {
  id: string;
  name: string;
  description?: string;
  favNum?: number;
  nameLabel?: string;
  image_url: string;
};

const RecipeAppTeam10: MockTeam10[] = [
  {
    id: "0",
    name: "Taiyo",
    image_url: "https://ca.slack-edge.com/T01FHU7HLER-U056CSVMHF1-7a69de394816-512",
    description:
      "白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    favNum: 999,
  },
  {
    id: "1",
    name: "たくちゃん",
    image_url: "https://ca.slack-edge.com/T01FHU7HLER-U0574P6Q4DU-49eaa8d1783b-512",
    description:
      "赤ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    favNum: 999,
  },
  {
    id: "2",
    name: "武良",
    image_url: "https://ca.slack-edge.com/T01FHU7HLER-U03LL62UJP3-03d5e2c0358b-512",
    description:
      "青ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    favNum: 999,
  },
  {
    id: "3",
    name: "yoko",
    image_url: "https://ca.slack-edge.com/T01FHU7HLER-U01GG1GFBLJ-f1aadd741981-512",
    description:
      "緑ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    favNum: 999,
  },
  {
    id: "4",
    name: "ペリオ",
    image_url: "https://ca.slack-edge.com/T01FHU7HLER-U02CG1PS9B7-39b5fbb8ff7d-512",
    description:
      "紫ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    favNum: 999,
  },
  {
    id: "5",
    name: "あこ",
    image_url: "https://ca.slack-edge.com/T01FHU7HLER-U03BVBARP1B-891872592f36-512",
    description:
      "黄色ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。",
    favNum: 999,
  },
];
