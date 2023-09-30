"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/Button";
import { ToggleButton } from "@/components/Button/ToggleButton";

type RecipeActionButtonProps = {
  isSelfUserRecipe: boolean;
  isFavorite: boolean;
  recipeId: string;
  userId?: string;
};

export const RecipeActionButton: React.FC<RecipeActionButtonProps> = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const router = useRouter();
  const handleClick = () => {
    if (!props.userId) {
      router.push("/signUp");
    }

    try {
      if (isFavorite) {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/favorite/${props.recipeId}?id=${props.userId}`, {
          method: "DELETE",
        });
        setIsFavorite(false);
      } else {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/favorite/${props.recipeId}`, {
          method: "POST",
          body: JSON.stringify({ user_id: props.userId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setIsFavorite(true);
      }
    } catch (e) {}
  };

  return (
    <div className="flex justify-between gap-4">
      <ToggleButton isCheck={isFavorite} onClick={handleClick} addClassNames="w-full">
        {isFavorite ? "お気に入りに追加済み" : "お気に入りに追加"}
      </ToggleButton>
      {props.isSelfUserRecipe && (
        <Button
          buttonColor="white"
          addClassNames="w-full flex justify-center items-center"
          href="/recipe/edit"
          pathQuery={{ id: props.recipeId }}
        >
          レシピを編集
        </Button>
      )}
    </div>
  );
};
