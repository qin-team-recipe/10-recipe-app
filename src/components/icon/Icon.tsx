import cc from "classcat";

import { Account } from "@/components/icon/assets/Account";
import { ArrowLeft } from "@/components/icon/assets/ArrowLeft";
import { Check } from "@/components/icon/assets/Check";
import { Circle } from "@/components/icon/assets/Circle";
import { Close } from "@/components/icon/assets/Close";
import { Favorite } from "@/components/icon/assets/Favorite";
import { Menu } from "@/components/icon/assets/Menu";
import { Plus } from "@/components/icon/assets/Plus";
import { Search } from "@/components/icon/assets/Search";
import { ShoppingCart } from "@/components/icon/assets/ShoppingCart";
import { SiteLogo } from "@/components/icon/assets/SiteLogo";

export type IconType =
  | "account"
  | "arrowLeft"
  | "check"
  | "circle"
  | "close"
  | "favorite"
  | "menu"
  | "plus"
  | "search"
  | "shoppingCart"
  | "siteLogo";

type IconProps = {
  type: IconType;
  // organicColorは、アイコンの色をそのままにしたい場合に使用してください。
  color?: "black" | "gray" | "lightGray" | "tomato" | "white" | "organicColor";
  size?: "small" | "medium" | "large";
  addClassNames?: string;
};

export const Icon: React.FC<IconProps> = (props) => {
  const iconElm = (type: IconType) => {
    switch (type) {
      case "account":
        return <Account />;
      case "arrowLeft":
        return <ArrowLeft />;
      case "circle":
        return <Circle />;
      case "check":
        return <Check />;
      case "close":
        return <Close />;
      case "favorite":
        return <Favorite />;
      case "menu":
        return <Menu />;
      case "plus":
        return <Plus />;
      case "search":
        return <Search />;
      case "shoppingCart":
        return <ShoppingCart />;
      case "siteLogo":
        return <SiteLogo />;
    }
  };

  const iconColor = cc([
    {
      "stroke-black": props.color === "black" || (!props.color && props.color !== "organicColor"),
      "stroke-gray": props.color === "gray",
      "stroke-lightGray": props.color === "lightGray",
      "stroke-tomato": props.color === "tomato",
      "stroke-white": props.color === "white",
    },
  ]);

  const iconSize = cc([
    {
      "w-3.5 h-3.5": props.size === "small",
      "w-6 h-6": props.size === "medium" || !props.size,
      "w-8 h-8": props.size === "large",
    },
  ]);

  return <i className={cc(["inline-block", iconColor, iconSize, props.addClassNames])}>{iconElm(props.type)}</i>;
};
