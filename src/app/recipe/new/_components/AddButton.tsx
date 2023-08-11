"use client";

import React from "react";

import { Icon } from "@/components/icon/Icon";

type Props = {
  title: string;
  onClick?: () => void;
};

export const AddButton: React.FC<Props> = (props) => {
  return (
    <button type="button" onClick={props.onClick} className="ml-4 mt-2 flex items-center gap-1">
      <Icon type="Plus" color="tomato" />
      <p className="text-tomato">{props.title}</p>
    </button>
  );
};
