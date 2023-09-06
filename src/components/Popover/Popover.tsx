"use client";

import { useState } from "react";

import { Icon } from "@/components/Icon/Icon";

type PopoverProps = {
  children: React.ReactNode;
};
export const Popover: React.FC<PopoverProps> = (props) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const handlePopOverOpen = () => setIsPopoverOpen(!isPopoverOpen);

  return (
    <div className="relative">
      <button type="button" aria-label="Toggle Menu" onClick={handlePopOverOpen}>
        <Icon type="DotsCircleHorizontal" color="black" />
      </button>
      <ul
        className={`absolute right-3 top-10 rounded bg-white shadow drop-shadow ${isPopoverOpen ? "block" : "hidden"}`}
      >
        {props.children}
      </ul>
    </div>
  );
};
