"use client";

import { useEffect } from "react";
import { NextPage } from "next";

const Page: NextPage = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("http://localhost:3000/api/recipeWithIngredientInstruction", { cache: "no-store" });
      const json = await data.json();
      console.log(json);
    };
    getData();
  }, []);

  return <div className="text-tomato">トップページ</div>;
};

export default Page;
