"use client";

import { useState } from "react";

import cc from "classcat";

type ButtonToggleProps = {
  // クリック前のボタン内テキスト
  initialText: string;
  // クリック後のボタン内テキスト
  clickedText: string;
};

export const ButtonToggle: React.FC<ButtonToggleProps> = (props) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const buttonClass = cc([
    "w-full",
    "px-2 py-0.5",
    "text-medium",
    "border",
    "border-tomato",
    "rounded",
    {
      "bg-tomato": checked,
      transparent: !checked,
    },
    {
      "text-white": checked,
      "text-tomato": !checked,
    },
  ]);

  return (
    <button className={buttonClass} onClick={handleClick}>
      {checked ? props.clickedText : props.initialText}
    </button>
  );
};
