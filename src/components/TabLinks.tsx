import { UrlObject } from "url";
import { Route } from "next";
import Link from "next/link";

import cc from "classcat";

export type Tab = {
  label: string;
  href: UrlObject | Route<string>;
  isActive?: boolean;
};

type TabLinksProps = {
  tabs: Tab[];
};

export const TabLinks: React.FC<TabLinksProps> = ({ tabs }) => {
  return (
    <div className="flex items-center justify-center pt-6">
      <div className="flex w-full max-w-md flex-col">
        <div className="flex items-center justify-between">
          {tabs.map((tab) => {
            const tabClass = cc([
              "w-full border-b-2 px-2 text-center text-small",
              {
                "border-black font-semibold border-b-2": tab.isActive,
                "border-lightGray": !tab.isActive,
              },
            ]);
            return (
              <Link href={tab.href} key={tab.label} className={tabClass}>
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
