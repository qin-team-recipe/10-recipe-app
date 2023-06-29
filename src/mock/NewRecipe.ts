export const mockDataNewRecipe = {
  material: {
    items: [
      { id: 1, title: "キャベツ", supplement: "5〜6枚" },
      { id: 2, title: "チーズ", supplement: "ピザ用" },
    ],
    buttonTitle: "材料を追加する",
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
    buttonTitle: "工程を追加する",
  },
  image: {
    items: [
      { id: 1, image_url: "/images/sample_new_recipe.jpg" },
      { id: 2, image_url: "/images/sample_new_recipe.jpg" },
    ],
    buttonTitle: "画像を追加する",
  },
  link: {
    items: [
      { id: 1, url: "https://www.youtube.com/xxx" },
      { id: 2, url: "https://www.sirogohan.com/xxx" },
    ],
    buttonTitle: "リンクを追加する",
  },
};
