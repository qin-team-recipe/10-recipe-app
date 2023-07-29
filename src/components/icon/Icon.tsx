import cc from "classcat";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Circle,
  CircleCheck,
  Copy,
  DotsVertical,
  Heart,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  Trash,
  UserCircle,
  X,
} from "tabler-icons-react";

import { CloseButton } from "@/components/icon/assets/CloseButton";
import { Edit } from "@/components/icon/assets/Edit";
import { SiteLogo } from "@/components/icon/assets/SiteLogo";

export type IconType =
  | "ArrowLeft"
  | "Circle"
  | "CircleCheck"
  | "Copy"
  | "Heart"
  | "Menu"
  | "Plus"
  | "Minus"
  | "Search"
  | "ShoppingCart"
  | "SiteLogo"
  | "UserCircle"
  | "Trash"
  | "CloseButton"
  | "Edit"
  | "DotsVertical"
  | "ChevronUp"
  | "ChevronDown";

type IconProps = {
  type: IconType;
  // organicColorは、アイコンの色をそのままにしたい場合に使用してください。
  color?: "black" | "blue" | "gray" | "lightGray" | "tomato" | "white" | "organicColor";
  backgrondColor?: "lightTomato";
  size?: "small" | "medium" | "large";
  addClassNames?: string;
  // https://tabler-icons-react.vercel.app/ にないアイコンでassetsに追加したものを使用する場合はtrueにしてください。
  isLocalSvg?: boolean;
};

export const Icon: React.FC<IconProps> = (props) => {
  const iconElm = (type: IconType) => {
    switch (type) {
      case "ArrowLeft":
        return <ArrowLeft className={cc([iconColor, iconSize, props.addClassNames])} />;
      case "ChevronUp":
        return <ChevronUp className={cc([iconColor, iconSize, props.addClassNames])} />;
      case "ChevronDown":
        return <ChevronDown className={cc([iconColor, iconSize, props.addClassNames])} />;
      case "Circle":
        return <Circle className={cc([iconColor, iconSize, props.addClassNames])} />;
      case "CircleCheck":
        return <CircleCheck className={cc([iconColor, iconSize, props.addClassNames])} />;
      case "Copy":
        return <Copy className={cc([iconColor, iconSize, props.addClassNames])} />;
      case "Heart":
        return <Heart className={cc([iconColor, iconSize, props.addClassNames])} />;
      case "Menu":
        return <Menu className={cc([iconColor, iconBackGround, iconSize, props.addClassNames])} />;
      case "Plus":
        return <Plus className={cc([iconColor, iconBackGround, iconSize, props.addClassNames])} />;
      case "Minus":
        return <Minus className={cc([iconColor, iconBackGround, iconSize, props.addClassNames])} />;
      case "Search":
        return <Search className={cc([iconColor, iconSize, props.addClassNames])} />;
      case "ShoppingCart":
        return <ShoppingCart className={cc([iconColor, iconSize, props.addClassNames])} />;
      case "SiteLogo":
        return <SiteLogo />;
      case "UserCircle":
        return <UserCircle className={cc([iconColor, iconSize, props.addClassNames])} />;
      case "Trash":
        return <Trash className={cc([iconColor, iconSize, props.addClassNames])} />;
      case "DotsVertical":
        return <DotsVertical className={cc([iconColor, iconSize, props.addClassNames])} />;
      case "CloseButton":
        return <CloseButton />;
      case "Edit":
        return <Edit />;
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

  const iconBackGround = cc([{ "bg-lightTomato": props.backgrondColor === "lightTomato" }]);

  const iconSize = cc([
    {
      "w-3.5 h-3.5": props.size === "small",
      "w-6 h-6": props.size === "medium" || !props.size,
      "w-8 h-8": props.size === "large",
    },
  ]);

  return props.isLocalSvg ? (
    <i className={cc(["inline-block", iconColor, iconSize, props.addClassNames])}>{iconElm(props.type)}</i>
  ) : (
    <i className="inline-block">{iconElm(props.type)}</i>
  );
};
