"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon } from "@/components/Icon/Icon";
import { Popover } from "@/components/Popover";
import { PopoverItems, PopoverItemsProps } from "@/components/Popover/PopoverItems";

export const TopBar = () => {
  const pathname = usePathname();

  const copyToClipboard = async () => {
    try {
      const fullpath = `${process.env.NEXT_PUBLIC_API_URL}${pathname}`;
      await navigator.clipboard.writeText(fullpath);
      alert(`${fullpath} パスをコピーしました！`);
    } catch (error) {
      alert(error || "コピーに失敗しました");
    }
  };
  const removeItem = () => {
    alert("削除しました");
  };
  // とりあえず可能性のあるリンク・onClick全部出し（TODO値はユーザーのLinkを取得
  const items: PopoverItemsProps[] = [
    { href: "/", text: "プロフィールを編集する", icon: "Edit" },
    { href: "/", text: "TikTok", icon: "BrandTiktok" },
    { href: "/", text: "Twitter", icon: "BrandTwitter" },
    { href: "/", text: "Facebook", icon: "BrandFacebook" },
    { href: "/", text: "homepage.com", icon: "HomeShare" },
    { onClick: copyToClipboard, text: "URLをコピーする", icon: "Copy" },
    { onClick: removeItem, text: "削除する", icon: "Trash", isTopBorder: true },
  ];
  return (
    <div className="relative z-20 flex justify-between p-4">
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
          {items.map((item, i) => (
            <PopoverItems {...item} key={i} />
          ))}
        </Popover>
      </div>
    </div>
  );
};
