import Link from "next/link";

import cc from "classcat";

export type Tab = {
  label: string;
  href: string;
  isActive?: boolean;
};

type TabLinksProps = {
  tabs: Tab[];
};

export const TabLinks: React.FC<TabLinksProps> = ({ tabs }) => {
  return (
    <div className="flex">
      {tabs.map((tab) => {
        const tabClass = cc([
          "w-full flex-1 border-b-2 py-2 text-center text-medium",
          {
            "border-black font-semibold border-b-2": tab.isActive,
            "border-lightGray": !tab.isActive,
          },
        ]);
        return (
          <Link href={{ pathname: tab.href }} key={tab.label} className={tabClass}>
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
};
