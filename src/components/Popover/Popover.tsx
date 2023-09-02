"use client";

import { useState, type FC } from "react";

import { Icon } from "@/components/Icon/Icon";
import { PopoverLabelsProps } from "@/components/Popover/PopoverLabels";

// TODOコピーはonClickで渡すべき。しかもこれは呼び出し側で渡す
// const items = [
//   { href: "/fav/my/edit", text: "プロフィールを編集する", icon: "Edit" },
//   { href: "", text: "コピーする", icon: "Copy" },
// ];

export const Popover: FC<PopoverLabelsProps> = (/*props*/) => {
  const handlePopOverOpen = () => {
    return setIsNavbarOpen(!isNavbarOpen);
  };
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="group relative">
      <div className="absolute right-3 top-3 cursor-pointer rounded-full p-1.5">
        <button type="button" aria-label="Toggle Menu" onClick={handlePopOverOpen}>
          <Icon type="DotsCircleHorizontal" color="black" />
        </button>
        <div className={`absolute right-3 top-10  ${isNavbarOpen ? "hidden" : "block"}`}>
          <button type="button" aria-label="toggle modal" className="fixed top-0" onClick={handlePopOverOpen}></button>
          {/* イメージとしては次のようにしたい */}
          {/* {items.map((item) => {
            return <PopoverLabels {...item} key={props.href} />;
          })} */}
        </div>
      </div>
    </div>
  );
};
