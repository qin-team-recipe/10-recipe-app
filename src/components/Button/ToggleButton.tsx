"use client";

import { useEffect, useState } from "react";

import cc from "classcat";

type ToggleButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  addClassNames?: string;
  isCheck: boolean;
};

export const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const [checked, setChecked] = useState(props.isCheck);
  // データ取得のタイミングによってはcheckedが更新されないため、useEffectで更新する
  useEffect(() => {
    setChecked(props.isCheck);
  }, [props.isCheck]);

  const handleClick = () => {
    props.onClick();
    setChecked(!checked);
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
