"use client";

import React from "react";
import Link from "next/link";

import cc from "classcat";

import { Icon, IconType } from "@/components/Icon/Icon";

export type PopoverItemsProps = {
  className?: string;
  text: string;
  subText?: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  isTopBorder?: boolean;
};

export const PopoverItems: React.FC<PopoverItemsProps> = (props) => {
  const itemClass = cc([
    "whitespace-nowrap p-2 text-medium text-gray",
    {
      "border-t border-lightGray": props.isTopBorder,
    },
  ]);
  return (
    <li className={itemClass}>
      {props.href ? (
        <Link href={{ pathname: props.href }} className="flex items-center gap-1">
          <Icon color="gray" type={props.icon} size="small" />
          {props.text}
        </Link>
      ) : (
        <button onClick={props.onClick} className="flex items-center gap-1">
          <Icon color="gray" type={props.icon} size="small" />
          <div className="flex flex-col items-start leading-3">
            <span>{props.text}</span>
          </div>
        </button>
      )}
    </li>
  );
};
