import { loadDefaultErrorComponents } from "next/dist/server/load-components";

type MockRecipe = {
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
    id: "1",
    title: "Recipe A",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut repudiandae maxime magnam illum eligendi facere alias voluptates, quasi fugiat omnis, cumque voluptatibus repellat repellendus necessitatibus tenetur dolorem? Ex, maiores.",
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
    id: "2",
    title: "Recipe B",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut repudiandae maxime magnam illum eligendi facere alias voluptates, quasi fugiat omnis, cumque voluptatibus repellat repellendus necessitatibus tenetur dolorem? Ex, maiores.",
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
    id: "3",
    title: "Recipe C",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut repudiandae maxime magnam illum eligendi facere alias voluptates, quasi fugiat omnis, cumque voluptatibus repellat repellendus necessitatibus tenetur dolorem? Ex, maiores.",
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
    id: "4",
    title: "Recipe D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut repudiandae maxime magnam illum eligendi facere alias voluptates, quasi fugiat omnis, cumque voluptatibus repellat repellendus necessitatibus tenetur dolorem? Ex, maiores.",
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
    id: "5",
    title: "Recipe E",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut repudiandae maxime magnam illum eligendi facere alias voluptates, quasi fugiat omnis, cumque voluptatibus repellat repellendus necessitatibus tenetur dolorem? Ex, maiores.",
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
    id: "6",
    title: "Recipe F",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut repudiandae maxime magnam illum eligendi facere alias voluptates, quasi fugiat omnis, cumque voluptatibus repellat repellendus necessitatibus tenetur dolorem? Ex, maiores.",
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
