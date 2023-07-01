type Mock = {
  title: string;
  description?: string;
  favNum?: number;
  nameLabel?: string;
  src: string;
};

export const mockData: Mock[] = [
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
