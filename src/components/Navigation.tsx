"use client";

import React from "react";
import { Route } from "next";
import { usePathname } from "next/navigation";

import { NavLink } from "@/components/button";
import { Icon, IconType } from "@/components/icon/Icon";

const labels = [
  { href: "/search", label: "検索", icon: "Search" },
  { href: "/fav", label: "お気に入り", icon: "Heart" },
  { href: "/cart", label: "カート", icon: "ShoppingCart" },
];

type navigationProps = {
  pathname: Route<string> | URL;
};

export const Navigation: React.FC<navigationProps> = (props) => {
  const pathname = usePathname();

  return (
    <nav className="pt-2">
      <ul className="flex w-screen justify-around sm:w-full sm:flex-col">
        <li className="hidden sm:block">ロゴ</li>
        {labels.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <div key={href}>
              <NavLink
                href={href}
                activeClassName={isActive ? "text-tomato" : ""}
                activeColor={isActive ? "tomato" : "black"}
              >
                <div className="mt-3 flex flex-row justify-start">
                  <span className="">
                    <Icon type={icon as IconType} size="large" color={isActive ? "tomato" : "black"} />
                  </span>
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
