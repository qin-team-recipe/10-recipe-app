import { log } from "console";

import { NavLink } from "@/components/button";
import { FavIcon, SearchIcon, ShoppingCartIcon } from "@/components/icons";

const labels = [
  { href: "/", label: "話題を検索", icon: SearchIcon },
  { href: "/fav", label: "お気に入り", icon: FavIcon },
  { href: "/list", label: "買い物リスト", icon: ShoppingCartIcon },
];

// TODO: 仮の左カラム兼、フッターなので、後で対応お願いします。

type navigationProps = {
  color?: "tomato" | "black";
  pathname?: "/" | "/fav" | "list";
};
export const Navigation: React.FC<navigationProps> = (props) => {
  return (
    <nav className="flex justify-center px-4 pt-2">
      <ul className="mx-auto flex flex-row justify-start text-small sm:flex-col">
        <li className="hidden sm:block">ロゴ</li>
        {labels.map(({ href, label, icon }) => {
          return (
            <div key={href}>
              <NavLink href={href} activeClassName="text-tomato">
                <div className="hidden flex-col items-center sm:mt-3 sm:flex sm:flex-row sm:items-start">
                  <span className="px-3 sm:pl-2">{label}</span>
                </div>
              </NavLink>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};
