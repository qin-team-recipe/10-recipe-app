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

  const isYouTube = props.href && props.href.startsWith("https://www.youtube.com/");
  const isInstagram = props.href && props.href.startsWith("https://www.instagram.com/");
  const isTiktok = props.href && props.href.startsWith("https://www.tiktok.com/");
  const isTwitter = props.href && props.href.startsWith("https://www.twitter.com/");
  const isTFacebook = props.href && props.href.startsWith("https://www.facebook.com/");
  const isInternal = props.href && props.href.includes(`${process.env.NEXT_PUBLIC_API_URL}`);

  // TODO ブランド系はpropsでなくapiから取得する
  if (isYouTube || isInstagram) return null;
  if (isTiktok)
    return (
      <li className={itemClass}>
        <Link href={props.href} className="flex items-center gap-1" target="_blank">
          <Icon color="gray" type="BrandTiktok" size="small" />
          TikTok
        </Link>
      </li>
    );
  if (isTwitter)
    return (
      <li className={itemClass}>
        <Link href={props.href} className="flex items-center gap-1" target="_blank">
          <Icon color="gray" type="BrandTwitter" size="small" />
          Twitter
        </Link>
      </li>
    );
  if (isTFacebook)
    return (
      <li className={itemClass}>
        <Link href={props.href} className="flex items-center gap-1" target="_blank">
          <Icon color="gray" type="BrandFacebook" size="small" />
          Facebook
        </Link>
      </li>
    );
  if (isInternal)
    return (
      <li className={itemClass}>
        <Link href={props.href} className="flex items-center gap-1">
          <Icon color="gray" type={props.icon} size="small" />
          {props.text}
        </Link>
      </li>
    );
  if (!props.href)
    return (
      <li className={itemClass}>
        <button onClick={props.onClick} className="flex items-center gap-1">
          <Icon color="gray" type={props.icon} size="small" />
          <div className="flex flex-col items-start leading-3">
            <span>{props.text}</span>
          </div>
        </button>
      </li>
    );
  // brandでも内部リンクでもない場合はホームページ
  return (
    <li className={itemClass}>
      <Link href={props.href} className="flex items-center gap-1" target="_blank">
        <Icon color="gray" type="HomeShare" size="small" />
        {props.text}
      </Link>
    </li>
  );
};
