import Link from "next/link";

import cc from "classcat";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

type TabLinksProps = {
  tabs: {
    label: string;
    href: string;
    isActive?: boolean;
  }[];
};

export const TabLinks: React.FC<TabLinksProps> = ({ tabs }) => {
  // const pathname = usePathname();

  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex w-full max-w-md flex-col gap-y-2">
        <div className="flex items-center justify-between p-1">
          {tabs.map((tab) => {
            const tabClass = cc([
              "w-full border-b-2 border-lightGray p-2 text-center text-small",
              {
                "border-black font-semibold border-b-2": tab.isActive,
              },
            ]);
            return (
              <div key={tab.href} className={tabClass}>
                {tab.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
