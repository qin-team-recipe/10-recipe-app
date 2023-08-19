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
    <div className="mt-3 flex items-center justify-center">
      <div className="flex w-full max-w-md flex-col">
        <div className="flex items-center justify-between">
          {tabs.map((tab) => {
            // eslint-disable-next-line tailwindcss/no-custom-classname
            const tabClass = cc([
              "text-md w-full flex-1 border-b-2 py-2 text-center leading-[17px]",
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
      </div>
    </div>
  );
};
