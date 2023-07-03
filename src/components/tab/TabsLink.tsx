"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { TabWrapper } from "@/components/tab/TabWrapper";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

type TabsLinkProps = {
  tabMock: {
    label: string;
    href: string;
  }[];
};
const tabMock = [
  {
    label: "レシピ",
    href: `/chef/1`,
  },
  {
    label: "リンク",
    href: "/chef/1/link",
  },
];
export const TabsLink: React.FC<TabsLinkProps> = () => {
  const pathname = usePathname();

  return (
    <TabWrapper>
      {tabMock.map((tab) => {
        const isActive = pathname.endsWith(tab.href);

        return (
          <Link
            className={`w-full border-b-2 p-2 text-center outline-none ${
              isActive ? " border-gray font-semibold" : "border-lightGray"
            } `}
            // TODO: url検証、生成ロジック
            href={tab.href as unknown as URL}
            key={tab.label}
          >
            {tab.label}
          </Link>
        );
      })}
    </TabWrapper>
  );
};
