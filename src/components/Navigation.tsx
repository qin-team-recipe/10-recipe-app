import { NavLink } from "@/components/button";
import { FavIcon, SearchIcon, ShoppingCartIcon } from "@/components/icons";

const labels = [
  { href: "/", label: "話題を検索", icon: <SearchIcon /> },
  { href: "/fav", label: "お気に入り", icon: <FavIcon /> },
  { href: "/list", label: "買い物リスト", icon: <ShoppingCartIcon /> },
];

// TODO: 仮の左カラム兼、フッターなので、後で対応お願いします。

type navigationProps = {
  pathname?: "/" | "/fav" | "list";
};

export const Navigation: React.FC<navigationProps> = (props) => {
  return (
    <nav className="px-4 pt-2">
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
