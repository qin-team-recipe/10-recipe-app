type MockRecipe = {
  pk: number;
  id: string;
  title: string;
  description?: string;
  servings?: number;
  link?: string;
  image_url1: string;
  image_url2?: string;
  status?: boolean;
  chef_id: string;
  user_id: string;
};

export const mockDataRecipe: MockRecipe[] = [
  {
    pk: 1,
    id: "1",
    title: "Recipe A",
    description:
      "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。1",
    servings: 4,
    link: "string",
    image_url1:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    image_url2: "string",
    status: true,
    chef_id: "1",
    user_id: "string",
  },
  {
    pk: 2,
    id: "2",
    title: "Recipe B",
    description:
      "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。2",
    servings: 4,
    link: "string",
    image_url1:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    image_url2: "string",
    status: true,
    chef_id: "2",
    user_id: "string",
  },
  {
    pk: 3,
    id: "3",
    title: "Recipe C",
    description:
      "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。3",
    servings: 4,
    link: "string",
    image_url1:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    image_url2: "string",
    status: true,
    chef_id: "3",
    user_id: "string",
  },
  {
    pk: 4,
    id: "4",
    title: "Recipe D",
    description:
      "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。4",
    servings: 4,
    link: "string",
    image_url1:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    image_url2: "string",
    status: true,
    chef_id: "4",
    user_id: "string",
  },
  {
    pk: 5,
    id: "5",
    title: "Recipe E",
    description:
      "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。5",
    servings: 4,
    link: "string",
    image_url1:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    image_url2: "string",
    status: true,
    chef_id: "5",
    user_id: "string",
  },
  {
    pk: 6,
    id: "6",
    title: "Recipe F",
    description:
      "用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。6",
    servings: 4,
    link: "string",
    image_url1:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    image_url2: "string",
    status: true,
    chef_id: "6",
    user_id: "string",
  },
];

type MockIngredient = {
  id: number;
  ingredients_id: string;
  step?: string;
  name?: string;
  is_checked?: boolean;
  is_shopping_list?: boolean;
};

export const mockDataIngredient: MockIngredient[] = [
  {
    id: 1,
    ingredients_id: "1",
    step: "1",
    name: "キャベツ",
    is_checked: true,
    is_shopping_list: false,
  },
  {
    id: 2,
    ingredients_id: "1",
    step: "1",
    name: "人参",
    is_checked: true,
    is_shopping_list: false,
  },
  {
    id: 3,
    ingredients_id: "1",
    step: "1",
    name: "レタス",
    is_checked: true,
    is_shopping_list: false,
  },
  {
    id: 4,
    ingredients_id: "1",
    step: "1",
    name: "トマト",
    is_checked: true,
    is_shopping_list: false,
  },
  {
    id: 5,
    ingredients_id: "1",
    step: "1",
    name: "豚ひき肉200g",
    is_checked: true,
    is_shopping_list: false,
  },
  {
    id: 6,
    ingredients_id: "1",
    step: "1",
    name: "トマト",
    is_checked: true,
    is_shopping_list: false,
  },
];
