import cc from "classcat";

type ButtonProps = {
  children: React.ReactNode;
  // ボタン色
  bgColor?: "tomato" | "blue" | "black" | "white" | "none";
  // 文字色
  fontColor?: "tomato" | "blue" | "black" | "white";
  // 文字サイズ
  fontSize: "large" | "medium" | "small";
  // ボタン幅
  width?: "large" | "medium" | "small";
  // ボタン高さ
  height?: "large" | "medium" | "small";
  // 枠線の有無
  isBorder?: boolean;
  // ボタンの角を丸くするかどうか
  isRounded?: boolean;
  // 影の有無
  isShadow?: boolean;
  // ホバー時のアクション
  hoverAction?: boolean;
  // 追加のクラス
  addClassNames?: string;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const buttonClass = cc([
    {
      "bg-tomato": props.bgColor === "tomato" || !props.bgColor,
      "bg-blue": props.bgColor === "blue",
      "bg-black": props.bgColor === "black",
      "bg-white": props.bgColor === "white",
      transparent: props.bgColor === "none",
    },
    {
      "text-tomato": props.fontColor === "tomato",
      "text-blue": props.fontColor === "blue",
      "text-black": props.fontColor === "black",
      "text-white": props.fontColor === "white" || !props.fontColor,
    },
    {
      "w-1/5": props.width === "small",
      "w-52": props.width === "medium",
      "w-full": props.width === "large",
    },
    {
      "px-2 py-0.5": props.height === "small",
      "px-3.5 py-1.5": props.height === "medium" || !props.height,
      "px-4.5 py-3": props.height === "large",
    },
    {
      "text-small": props.fontSize === "small",
      "text-medium": props.fontSize === "medium",
      "text-large": props.fontSize === "large",
    },
    {
      border: props.isBorder,
      "border-tomato": props.fontColor == "tomato",
      "border-black": props.fontColor == "black",
    },
    {
      "hover:opacity-80": props.hoverAction,
    },
    {
      rounded: !props.isRounded,
      "rounded-full": props.isRounded,
    },
    {
      "drop-shadow-lg": props.isShadow,
    },
  ]);
  return <button className={cc([buttonClass, props.addClassNames])}>{props.children}</button>;
};
