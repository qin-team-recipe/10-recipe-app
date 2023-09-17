// TODO ChefFollowButtonをコピーしただけなので、編集ページへ遷移するボタンに修正する
"use client";

import { useState } from "react";

import { ToggleButton } from "@/components/Button/ToggleButton";

export const ChefEditButton: React.FC = () => {
  const [isFollow, setIsFollow] = useState(false);
  const handleClick = () => {
    setIsFollow(!isFollow);
  };

  return (
    <ToggleButton onClick={handleClick}>{isFollow ? "プロフィールを編集する" : "プロフィールを編集する"}</ToggleButton>
  );
};
