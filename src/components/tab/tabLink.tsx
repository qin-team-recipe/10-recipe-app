import Link from "next/link";
import { usePathname } from "next/navigation";

import { TabWrapper } from "@/components/tab/tabWrapper";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

// type TabsLinkProps = {
//   title: string;
//   href: string;
//   slug: string;
// };
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
      {/* 次の書き方は残念ながらエラー解消できず...
       const url = new URL(tab.slug, process.env.NEXT_PUBLIC_BASE_URL); */}
      {tabMock.map((tab: any) => {
        //次の書き方は残念ながらエラー解消できず...
        // const url = new URL(tab.slug, process.env.NEXT_PUBLIC_BASE_URL);
        return (
          <Link
            key={tab.href}
            // TODO: url検証、生成ロジック
            href={tab.slug as unknown as URL}
            className={`w-full border-b-2 p-2 text-center outline-none ${
              pathname === tab.slug ? " border-gray" : "border-lightGray"
            } `}
          >
            {tab.title}
          </Link>
        );
      })}
    </TabWrapper>
  );
};
