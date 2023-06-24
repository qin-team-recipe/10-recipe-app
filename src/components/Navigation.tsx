import { FavIcon, ShoppingCartIcon } from "@/components/icons";
import { SearchIcon } from "@/components/icons/SearchIcon";

// TODO: 仮の左カラム兼、フッターなので、後で対応お願いします。
export const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-center px-4 pt-2">
      <ul className="mx-auto flex flex-row justify-start text-small sm:flex-col">
        <li className="hidden sm:block">ロゴ</li>
        <li className="flex flex-col items-center sm:mt-3 sm:flex-row sm:items-start">
          <SearchIcon selected={false} />
          <span className="px-3 sm:pl-2">話題を検索</span>
        </li>
        <li className="flex flex-col items-center sm:flex-row sm:items-start">
          <FavIcon selected={false} />
          <span className="px-3 sm:pl-2">お気に入り</span>
        </li>
        <li className="flex flex-col items-center sm:flex-row sm:items-start">
          <ShoppingCartIcon selected={false} />
          <span className="px-3 sm:pl-2">買い物リスト</span>
        </li>
      </ul>
    </nav>
  );
};
