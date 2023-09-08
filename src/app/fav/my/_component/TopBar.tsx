"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon } from "@/components/Icon/Icon";
import { Popover } from "@/components/Popover";
import { PopoverItems, PopoverItemsProps } from "@/components/Popover/PopoverItems";

export const TopBar = () => {
  const pathname = usePathname();

  async function copyToClipboard() {
    try {
      const fullpath = `${process.env.NEXT_PUBLIC_API_URL}${pathname}`;
      await navigator.clipboard.writeText(fullpath);
      alert(`${fullpath} パスをクリップボードにコピーしました！`);
    } catch (error) {
      alert(error || "コピーに失敗しました");
    }
  }
  const items: PopoverItemsProps[] = [
    { href: "/fav/my/edit", text: "プロフィールを編集する", icon: "Edit" },
    { onClick: copyToClipboard, text: "URLをコピーする", icon: "Copy" },
  ];
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
