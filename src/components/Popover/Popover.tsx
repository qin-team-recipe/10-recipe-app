"use client";

import { useState } from "react";

import { Icon } from "@/components/Icon/Icon";

type PopoverProps = {
  children: React.ReactNode;
};
export const Popover: React.FC<PopoverProps> = (props) => {
  const handlePopOverOpen = () => {
    return setIsPopoverOpen(!isPopoverOpen);
  };
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className="group relative">
      <div className="absolute right-3 top-3 cursor-pointer rounded-full p-1.5">
        <button type="button" aria-label="Toggle Menu" onClick={handlePopOverOpen}>
          <Icon type="DotsCircleHorizontal" color="black" />
        </button>
        <div
          className={`absolute right-3 top-10  rounded-lg bg-white
         text-center shadow-lg drop-shadow-lg ${isPopoverOpen ? "block" : "hidden"}`}
        >
          <button type="button" aria-label="toggle modal" className="fixed top-0" onClick={handlePopOverOpen}></button>
          <ul>{props.children}</ul>
        </div>
      </div>
    </div>
  );
};
