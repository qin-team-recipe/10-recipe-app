"use client";

import { useState } from "react";

import { ToggleButton } from "@/components/Button/ToggleButton";

export const RecipeFavoriteButton: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <ToggleButton isCheck onClick={handleClick}>
      {isFavorite ? "お気に入りに追加済み" : "お気に入りに追加"}
    </ToggleButton>
  );
};
