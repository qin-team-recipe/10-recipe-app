"use client";

import { UrlObject } from "url";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

type TabsLinkProps = {
  tabMock: {
    label: string;
    href: string;
  }[];
};

export const TabsLink: React.FC<TabsLinkProps> = ({ tabMock }) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex w-full max-w-md flex-col gap-y-2">
        <div className="flex items-center justify-between p-1">
          {tabMock.map((tab) => {
            const isActive = pathname.endsWith(tab.href);
            return (
              <Link
                className={`w-full border-b-2 p-2 text-center outline-none ${
                  isActive ? " border-gray font-semibold" : "border-lightGray"
                } `}
                // TODO: url検証、生成ロジック
                href={tab.href as unknown as UrlObject}
                key={tab.label}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
