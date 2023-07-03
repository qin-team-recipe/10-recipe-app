"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { TabWrapper } from "@/components/tab/TabWrapper";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

// TODO:propsにより呼び出す方式に変更（現状：hrefがundefinedとなる症状を解消できず）
// type TabsLinkProps = {
//   title: string;
//   href: string;
//   slug: string;
// };

// TODO：slugを動的に渡す方法未実装
const tabMock = [
  {
    title: "レシピ",
    href: "/chef",
    slug: `/chef/1`,
  },
  {
    title: "リンク",
    href: `/link`,
    slug: "/chef/1/link",
  },
];

export const TabsLink = () => {
  const pathname = usePathname();
  return (
    <TabWrapper>
      {tabMock.map((tab: any) => {
        //次の書き方は残念ながらエラー解消できず...
        // const url = new URL(tab.slug, process.env.NEXT_PUBLIC_BASE_URL);
        return (
          <Link
            key={tab.href}
            // TODO: url検証、生成ロジック
            href={tab.slug as unknown as URL}
            className={`w-full border-b-2 p-2 text-center outline-none ${
              pathname === tab.slug ? " border-gray font-semibold" : "border-lightGray"
            } `}
          >
            {tab.title}
          </Link>
        );
      })}
    </TabWrapper>
  );
};
