"use client";

import React from "react";
import Link from "next/link";

import { Icon, IconType } from "@/components/Icon/Icon";

export type PopoverItemsProps = {
  className?: string;
  text: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  isTopBorder?: boolean;
};

export const PopoverItems: React.FC<PopoverItemsProps> = (props) => {
  return props.href ? (
    <Link
      href={{ pathname: props.href }}
      className="flex items-center whitespace-nowrap pb-1 text-small text-gray"
      key={props.href}
    >
      <Icon color="gray" type={props.icon} />
      {props.text}
    </Link>
  ) : (
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
