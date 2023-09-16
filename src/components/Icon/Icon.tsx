import cc from "classcat";
import {
  ArrowLeft,
  BrandApple,
  BrandFacebook,
  BrandGoogle,
  BrandInstagram,
  BrandTiktok,
  BrandYoutube,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Circle,
  CircleCheck,
  Copy,
  DotsCircleHorizontal,
  DotsVertical,
  Edit,
  ExternalLink,
  Heart,
  HomeShare,
  Logout,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  ToolsKitchen2,
  Trash,
  UserCircle,
  X,
  ZoomExclamation,
} from "tabler-icons-react";

import { SiteLogo } from "@/components/Icon/assets/SiteLogo";

export type IconType =
  | "ArrowLeft"
  | "BrandApple"
  | "BrandFacebook"
  | "BrandGoogle"
  | "BrandInstagram"
  | "BrandTiktok"
  | "BrandYoutube"
  | "Circle"
  | "CircleCheck"
  | "ChevronRight"
  | "Copy"
  | "Heart"
  | "HomeShare"
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
  | "DotsCircleHorizontal"
  | "ChevronUp"
  | "ChevronDown"
  | "ExternalLink"
  | "Logout"
  | "ToolsKitchen2"
  | "ZoomExclamation";

type IconProps = {
  type: IconType;
  // organicColorは、アイコンの色をそのままにしたい場合に使用してください。
  color?: "black" | "blue" | "gray" | "lightGray" | "tomato" | "white" | "organicColor";
  backgrondColor?: "lightTomato" | "lightGray";
  fillColor?: "lightGray";
  size?: "small" | "medium" | "large";
  addClassNames?: string;
  // https://tabler-icons-react.vercel.app/ にないアイコンでassetsに追加したものを使用する場合はtrueにしてください。
  isLocalSvg?: boolean;
};

export const Icon: React.FC<IconProps> = (props) => {
  const iconElm = (type: IconType) => {
    switch (type) {
      case "ArrowLeft":
        return <ArrowLeft className={cc([iconColor, iconSize])} />;
      case "BrandApple":
        return <BrandApple className={cc([iconColor, iconSize])} />;
      case "BrandGoogle":
        return <BrandGoogle className={cc([iconColor, iconSize])} />;
      case "BrandTiktok":
        return <BrandTiktok className={cc([iconColor, iconSize])} />;
      case "BrandFacebook":
        return <BrandFacebook className={cc([iconColor, iconSize])} />;
      case "BrandYoutube":
        return <BrandYoutube className={cc([iconColor, iconSize])} />;
      case "HomeShare":
        return <HomeShare className={cc([iconColor, iconSize])} />;
      case "BrandInstagram":
        return <BrandInstagram className={cc([iconColor, iconSize])} />;
      case "ChevronUp":
        return <ChevronUp className={cc([iconColor, iconSize])} />;
      case "ChevronDown":
        return <ChevronDown className={cc([iconColor, iconSize])} />;
      case "Circle":
        return <Circle className={cc([iconColor, iconSize])} />;
      case "CircleCheck":
        return (
          <CircleCheck
            className={cc([iconColor, iconBackGround, iconSize])}
            fill={!props.fillColor ? "none" : props.fillColor}
          />
        );
      case "Copy":
        return <Copy className={cc([iconColor, iconSize])} />;
      case "Heart":
        return <Heart className={cc([iconColor, iconSize])} />;
      case "Menu":
        return <Menu className={cc([iconColor, iconBackGround, iconSize])} />;
      case "Plus":
        return <Plus className={cc([iconColor, iconBackGround, iconSize])} />;
      case "Minus":
        return <Minus className={cc([iconColor, iconBackGround, iconSize])} />;
      case "Search":
        return <Search className={cc([iconColor, iconSize])} />;
      case "ShoppingCart":
        return <ShoppingCart className={cc([iconColor, iconSize])} />;
      case "SiteLogo":
        return <SiteLogo />;
      case "UserCircle":
        return <UserCircle className={cc([iconColor, iconSize])} />;
      case "Trash":
        return <Trash className={cc([iconColor, iconSize])} />;
      case "DotsVertical":
        return <DotsVertical className={cc([iconColor, iconSize])} />;
      case "DotsCircleHorizontal":
        return <DotsCircleHorizontal className={cc([iconColor, iconSize])} />;
      case "CloseButton":
        return <X className={cc([iconColor, iconSize])} />;
      case "Edit":
        return <Edit className={cc([iconColor, iconSize])} />;
      case "ExternalLink":
        return <ExternalLink className={cc([iconColor, iconSize])} />;
      case "ChevronRight":
        return <ChevronRight className={cc([iconColor, iconSize])} />;
      case "Logout":
        return <Logout className={cc([iconColor, iconSize])} />;
      case "ToolsKitchen2":
        return <ToolsKitchen2 className={cc([iconColor, iconSize])} />;
      case "ZoomExclamation":
        return <ZoomExclamation className={cc([iconColor, iconSize])} />;
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

  const iconBackGround = cc([
    {
      "fill-lightGray": props.backgrondColor === "lightGray",
      "bg-lightTomato": props.backgrondColor === "lightTomato",
      "bg-lightGray": props.backgrondColor === "lightGray",
    },
  ]);

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
    <i className={cc(["inline-block", props.addClassNames])}>{iconElm(props.type)}</i>
  );
};
