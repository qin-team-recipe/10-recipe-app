export const newRecipeData = {
  recipe: { title: "レシピ名", placeholder: "例：肉じゃが" },
  material: {
    title: "材料 / 2人前",
    items: [
      { title: "キャベツ", supplement: "5〜6枚" },
      { title: "チーズ", supplement: "ピザ用" },
    ],
    buttonTitle: "材料を追加する",
  },
  recipeStep: {
    title: "作り方",
    items: [
      {
        description:
          "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
        supplement:
          "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
      },
      {
        description:
          "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。",
        supplement:
          "※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。",
      },
    ],
    buttonTitle: "工程を追加する",
  },
  image: {
    title: "画像",
    items: ["/images/sample_new_recipe.jpg", "/images/sample_new_recipe.jpg"],
    buttonTitle: "画像を追加する",
  },
  link: {
    title: "リンク",
    items: ["https://www.youtube.com/xxx", "https://www.sirogohan.com/xxx"],
    buttonTitle: "リンクを追加する",
  },
  header: {
    draft: "下書き",
    create: "作成する",
  },
};
