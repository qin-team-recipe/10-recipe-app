"use client";

import Link from "next/link";

import { UserLinks } from "@/mock/Links";

import { Icon } from "@/components/Icon/Icon";
import { Popover } from "@/components/Popover";
import { PopoverItems } from "@/components/Popover/PopoverItems";

export const TopBarSNS = () => {
  return (
    <div className="relative z-20 flex justify-between">
      <Link href="/fav">
        <Icon type="ArrowLeft" color="black" />
      </Link>
      <div className="flex w-1/4 justify-between">
        {/* 後ほどロジック実装 */}
        <Link href="/" target="_blank">
          <Icon type="BrandYoutube" color="black" />
        </Link>
        <Link href="/" target="_blank">
          <Icon type="BrandInstagram" size="medium" />
        </Link>
        <Popover>
          {UserLinks.map((link, i) => (
            <PopoverItems {...link} key={i} />
          ))}
        </Popover>
      </div>
    </div>
  );
};
