"use client";

import { useState } from "react";

import cc from "classcat";

type ToggleButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  addClassNames?: string;
};

export const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
    props.onClick();
  };
  const buttonColor = cc([
    "w-full rounded border border-tomato px-3 py-1.5 text-center text-medium",
    {
      "text-white bg-tomato": !checked,
      "text-tomato": checked,
    },
    props.addClassNames,
  ]);
  return (
    <button className={buttonColor} onClick={handleClick}>
      {props.children}
    </button>
  );
};
