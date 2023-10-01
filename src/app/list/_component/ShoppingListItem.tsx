"use client";

import { useState } from "react";

import cc from "classcat";

import { Icon } from "@/components/Icon/Icon";
import { Popover, PopoverItems } from "@/components/Popover";
import { PopoverItemsProps } from "@/components/Popover/PopoverItems";

type ShoppingListItemProps = {
  id: string;
  name: string;
  value?: string;
  isChecked?: boolean;
  onBlur: (_e: React.FocusEvent<HTMLInputElement>) => void;
};

export const ShoppingListItem: React.FC<ShoppingListItemProps> = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  const handleClick = async () => {
    setIsChecked(!isChecked);
  };

  const popoverItems: PopoverItemsProps[] = [
    { text: "上に移動する", icon: "ChevronUp" },
    { text: "下に移動する", icon: "ChevronDown" },
    { text: "リストから削除する", icon: "Trash", isTopBorder: true },
  ];

  return (
    <div className="border-b border-lightGray py-2 pl-4 pr-5">
      <div className="flex w-full items-center justify-between">
        <button onClick={handleClick} className={cc(["mr-2 h-6", { "opacity-30": isChecked }])}>
          {isChecked ? (
            <span className="m-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray">
              <Icon type="Check" color="white" size="small" />
            </span>
          ) : (
            <Icon type="Circle" color="tomato" addClassNames="flex-none" />
          )}
        </button>
        <input
          type="text"
          id={props.id}
          name={props.name}
          className={cc(["flex-1", { "opacity-30": isChecked }])}
          defaultValue={props.value}
          onBlur={props.onBlur}
        />
        <Popover iconType="DotsVertical" iconSize="small" addClassNames="flex-none">
          {popoverItems.map((item) => (
            <PopoverItems {...item} key={item.text} />
          ))}
        </Popover>
      </div>
    </div>
  );
};
