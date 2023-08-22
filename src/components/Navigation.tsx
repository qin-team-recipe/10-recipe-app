"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { NavLink } from "@/components/button";
import { Icon } from "@/components/icon/Icon";

const LABELS = [
  { href: "/", label: "検索", icon: "Search" },
  { href: "/fav", label: "お気に入り", icon: "Heart" },
  { href: "/list", label: "買い物リスト", icon: "ShoppingCart" },
] as const;

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="pt-2">
      <ul className="flex w-screen justify-around sm:w-full sm:flex-col">
        <li className="hidden sm:block">
          <Image
            src="/images/logo/png/yoko/IchiryuRecipe_yoko.png"
            alt="一流レシピロゴ"
            width={612}
            height={123}
            className="py-3 pr-6"
          />
        </li>
        {LABELS.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <div key={href}>
              <NavLink
                href={href}
                activeClassName={isActive ? "text-tomato" : ""}
                activeColor={isActive ? "tomato" : "black"}
              >
                <div className="mt-3 flex flex-row items-center justify-start">
                  <Icon type={icon} size="large" color={isActive ? "tomato" : "black"} />
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
