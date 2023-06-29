import Link from "next/link";
import { usePathname } from "next/navigation";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

type TabsLinkProps = {
  href?: string;
  slug?: string;
};

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

export const TabsLink: React.FC<TabsLinkProps> = (props) => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex w-full max-w-md flex-col gap-y-2">
        <div className="flex items-center justify-between p-1">
          {tabMock.map((tab) => {
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
        </div>
      </div>
    </div>
  );
};
