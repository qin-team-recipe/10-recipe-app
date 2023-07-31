import { pagesPath } from "@/lib/$path";

import { NavLink } from "@/components/button";
import { Icon } from "@/components/icon/Icon";

const labels = [
  { href: pagesPath.search.$url().pathname, label: "話題を検索", icon: <Icon type="Search" /> },
  { href: pagesPath.fav.$url().pathname, label: "お気に入り", icon: <Icon type="Heart" /> },
  { href: pagesPath.list.$url().pathname, label: "買い物リスト", icon: <Icon type="ShoppingCart" /> },
];

// TODO: 仮の左カラム兼、フッターなので、後で対応お願いします。

export const Navigation: React.FC = (props) => {
  return (
    <nav className="pt-2">
      <ul className="flex w-screen justify-around sm:w-full sm:flex-col">
        <li className="hidden sm:block">ロゴ</li>
        {labels.map(({ href, label, icon }) => {
          return (
            <div key={href}>
              <NavLink href={href} activeClassName="text-tomato" activeStrokeColor="tomato">
                <div className="mt-3 flex flex-row justify-start">
                  <span className="">{icon}</span>
                  <span className="hidden px-3 pl-2 sm:block">{label}</span>
                </div>
              </NavLink>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};
