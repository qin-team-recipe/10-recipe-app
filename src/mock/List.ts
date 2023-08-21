type MockMyList = {
  id: number;
  name: string;
  is_checked: boolean;
};

export const MockMyList: MockMyList[] = [
  {
    id: 1,
    name: "だしの素",
    is_checked: true,
  },
  {
    id: 2,
    name: "しょうゆ",
    is_checked: false,
  },
  {
    id: 3,
    name: "みりん",
    is_checked: true,
  },
];

type MockRecipeList = {
  id: number;
  name: string;
  is_checked: boolean;
};

export const MockRecipeList: MockRecipeList[] = [
  {
    id: 1,
    name: "キャベツ",
    is_checked: true,
  },
  {
    id: 2,
    name: "複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる複数行の場合はこうなる",
    is_checked: false,
  },
  {
    id: 3,
    name: "きゅうり",
    is_checked: true,
  },
];
