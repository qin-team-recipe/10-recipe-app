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
    { href: "https://twitter.com/yokoiwasaki6", text: "Twitter", icon: "BrandTwitter" },
    { href: "/", text: "Facebook", icon: "BrandFacebook" },
    // ここでisTobBorderを指定するとundefinedになるのはなぜ？？
    { href: "/", text: "homepage.com", icon: "HomeShare" },
    { onClick: copyToClipboard, text: "URLをコピーする", icon: "Copy" },
    // ここでisTobBorderを指定するとundefinedになるのはなぜ？？
    { onClick: removeItem, text: "削除する", icon: "Trash" },
  ];
  return (
    <div className="relative z-20 flex justify-between p-4">
      <Link href="/fav">
        <Icon type="ArrowLeft" color="black" />
      </Link>
      <div className="flex w-1/4 justify-between">
        {/* login userのLinkを取得 */}
        <Link href="https://www.youtube.com/channel/UCPc9dv6sP5JyiE32QCAneZA" target="_blank">
          <Icon type="BrandYoutube" color="black" />
        </Link>
        <Link href="https://www.instagram.com/yoko_and_kotaro/" target="_blank">
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
