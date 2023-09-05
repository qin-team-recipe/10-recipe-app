"use client";

import Link from "next/link";

import { Icon } from "@/components/Icon/Icon";
import { Popover } from "@/components/Popover";
import { PopoverItems, PopoverItemsProps } from "@/components/Popover/PopoverItems";

// ここでurlをクリップボードに貼り付ける処理
const handleOnClick = () => {
  alert("copied!");
};
const items: PopoverItemsProps[] = [
  { href: "/fav/my/edit", text: "プロフィールを編集する", icon: "Edit" },
  { onClick: handleOnClick, text: "URLをコピーする", icon: "Copy" },
];
export const TopBar = () => {
  return (
    <div className="relative flex justify-between p-4">
      <Link href="/fav">
        <Icon type="ArrowLeft" color="black" />
      </Link>
      <Popover>
        {items.map((item, i) => (
          <PopoverItems {...item} key={i} />
        ))}
      </Popover>
    </div>
  );
};
