type MockFav = {
  title: string;
  description?: string;
  favNum?: number;
  nameLabel?: string;
  src: string;
};

export const mockDataFav: MockFav[] = [
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
  ...[...Array(10)].map((_, index) => ({
    title: "トマトとルッコラのマルゲリータトマトとルッコラのマルゲリータトマトとルッコラのマルゲリータ",
    src: "/images/sample_chef.jpg",
    //擬似的にシェフの名前を生成したため、のちに削除する
    nameLabel: `シェフ${index + 3}`,
  })),
];
