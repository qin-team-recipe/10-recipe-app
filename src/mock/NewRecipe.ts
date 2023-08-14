export const mockDataNewRecipe = {
  material: {
    items: [
      { id: 1, title: "キャベツ" },
      { id: 2, title: "チーズ" },
    ],
  },
  recipeStep: {
    items: [
      {
        id: 1,
        description:
          "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
        supplement:
          "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
      },
      {
        id: 2,
        description:
          "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
        supplement:
          "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
      },
    ],
  },
  image: {
    items: [
      { id: 1, image_url: "/images/sample_new_recipe.jpg" },
      { id: 2, image_url: "/images/sample_new_recipe.jpg" },
    ],
  },
  link: {
    items: [
      { id: 1, url: "https://www.youtube.com/xxx" },
      { id: 2, url: "https://www.sirogohan.com/xxx" },
    ],
  },
};

export const mockDataDraftRecipe = [
  {
    id: 1,
    title: "グラタン",
    createdAt: "2023年4月22日",
  },
  {
    id: 2,
    title: "レシピ名未記載",
    createdAt: "2023年4月22日",
  },
  {
    id: 3,
    title: "オムライス",
    createdAt: "2023年4月22日",
  },
];
