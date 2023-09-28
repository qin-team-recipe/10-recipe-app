"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon, IconType } from "@/components/Icon/Icon";
import { Popover } from "@/components/Popover";
import { PopoverItems, PopoverItemsProps } from "@/components/Popover/PopoverItems";

export type TopBarProps = {
  link: string[];
  icon?: IconType;
  text?: string;
};

export const TopBar: React.FC<TopBarProps> = (props) => {
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

  const items: PopoverItemsProps[] = [
    ...props.link.map((link) => ({ href: link })),
    { href: "/", text: "プロフィールを編集する", icon: "Edit" },
    { onClick: copyToClipboard, text: "URLをコピーする", icon: "Copy" },
  ];

  return (
    <div className="relative z-20 w-1/4">
      <div className="flex justify-between  align-middle">
        <Link href="/" className="flex items-center gap-1 pb-1" target="_blank">
          <Icon color="gray" type="BrandYoutube" size="medium" />
        </Link>
        <Link href="/" className="flex items-center gap-1 pb-1" target="_blank">
          <Icon color="gray" type="BrandInstagram" size="medium" />
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
