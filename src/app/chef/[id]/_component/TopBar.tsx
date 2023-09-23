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
  const makeRecipePrivate = () => {
    alert("非公開にしました！");
  };
  
  // とりあえず可能性のあるリンク・onClick全部出し（TODO値はユーザーのLinkを取得
  const items: PopoverItemsProps[] = [
    // TODO SNS Linkから取得するロジック
    { href: "https://www.youtube.com/", text: "YouTube", icon: "BrandYoutube" },
    { href: "https://www.instagram.com/", text: "Instagram", icon: "BrandInstagram" },
    { href: "https://www.tiktok.com/", text: "TikTok", icon: "BrandTiktok" },
    { href: "https://www.twitter.com/", text: "Twitter", icon: "BrandTwitter" },
    { href: "https://www.facebook.com/", text: "Facebook", icon: "BrandFacebook" },
    { href: "https://www.homepage.com/", text: "homepage.com", icon: "HomeShare", isTopBorder: true },
    { href: "/", text: "プロフィールを編集する", icon: "Edit" },
    { onClick: copyToClipboard, text: "URLをコピーする", icon: "Copy" },
    // TODO レシピを非公開にする、公開するトグルの実装 iconもLock LockOpenを出し分ける
    { onClick: makeRecipePrivate, text: "レシピを非公開にする", icon: "Lock" },
    { onClick: removeItem, text: "削除する", icon: "Trash", isTopBorder: true },
  ];

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
          {items.map((item, i) => (
            <PopoverItems {...item} key={i} />
          ))}
        </Popover>
      </div>
    </div>
  );
};
