import React from "react";

import { Icon, IconType } from "@/components/Icon/Icon";

export type PopoverButtonProps = {
  className?: string;
  text: string;
  onClick: React.DOMAttributes<HTMLButtonElement>["onClick"];
  icon: IconType;
};

export const PopoverButtons: React.FC<PopoverButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="flex items-center whitespace-nowrap pb-1 text-small text-gray"
      key={props.text}
    >
      <Icon color="gray" type={props.icon} />
      {props.text}
    </button>
  );
};
