"use client";

import { useState } from "react";

import cc from "classcat";

import { Icon } from "@/components/Icon/Icon";

type PopoverProps = {
  children: React.ReactNode;
  iconType?: "DotsCircleHorizontal" | "DotsVertical";
  iconSize?: "small" | "medium" | "large";
  addClassNames?: string;
};

export const Popover: React.FC<PopoverProps> = (props) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const handlePopOverOpen = () => setIsPopoverOpen(!isPopoverOpen);

  return (
    <div className={cc(["relative", props.addClassNames])}>
      <button type="button" aria-label="Toggle Menu" onClick={handlePopOverOpen}>
        <Icon type={props.iconType || "DotsCircleHorizontal"} color="black" size={props.iconSize || "medium"} />
      </button>
      <ul
        className={`absolute right-0 top-7 z-10 rounded bg-white shadow drop-shadow ${
          isPopoverOpen ? "block" : "hidden"
        }`}
      >
        {props.children}
      </ul>
    </div>
  );
};
