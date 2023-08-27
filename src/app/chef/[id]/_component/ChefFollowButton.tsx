"use client";

import { useState } from "react";

import { ToggleButton } from "@/components/Button/ToggleButton";

export const ChefFollowButton: React.FC = () => {
  const [isFollow, setIsFollow] = useState(false);
  const handleClick = () => {
    setIsFollow(!isFollow);
  };

  return <ToggleButton onClick={handleClick}>{isFollow ? "フォロー中" : "フォローする"}</ToggleButton>;
};
