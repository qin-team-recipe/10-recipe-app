"use client";

import React from "react";
import Link from "next/link";

import cc from "classcat";

import { Icon, IconType } from "@/components/Icon/Icon";

export type PopoverItemsProps = {
  className?: string;
  text?: string;
  href?: string;
  icon?: IconType;
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

  const generateLinkObject = (href: string): { text: string | undefined; icon: IconType | undefined } => {
    if (href.startsWith("https://www.youtube.com/")) {
      return { text: "YouTube", icon: "BrandYoutube" };
    } else if (href.startsWith("https://www.instagram.com/")) {
      return { text: "Instagram", icon: "BrandInstagram" };
    } else if (href.startsWith("https://www.tiktok.com/")) {
      return { text: "TikTok", icon: "BrandTiktok" };
    } else if (href.startsWith("https://twitter.com/")) {
      return { text: "Twitter", icon: "BrandTwitter" };
    } else if (href.startsWith("https://www.facebook.com/")) {
      return { text: "Facebook", icon: "BrandFacebook" };
    } else {
      return { text: undefined, icon: undefined };
    }
  };

  return (
    <li className={itemClass}>
      {props.href ? (
        <Link href={{ pathname: props.href }} className="flex items-center gap-1" target="_blank">
          <Icon color="gray" type={props.icon || generateLinkObject(props.href).icon || "Link"} size="small" />
          {props.text || generateLinkObject(props.href).text || props.href}
        </Link>
      ) : (
        <button onClick={props.onClick} className="flex items-center gap-1">
          <Icon color="gray" type={props.icon || "Link"} size="small" />
          <div className="flex flex-col items-start leading-3">
            <span>{props.text}</span>
          </div>
        </button>
      )}
    </li>
  );
};
