import cc from "classcat";

type ButtonProps = {
  children: React.ReactNode;
  // ボタン色
  bgColor: "tomato" | "blue" | "black" | "white" | "none";
  // 文字色
  fontColor: "tomato" | "blue" | "black" | "white";
  // 文字サイズ
  size: "large" | "medium" | "small";
  // ボタン幅
  width?: "large" | "medium" | "small";
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
  const buttonCommon = cc([""]);
  const buttonBgColor = cc([
    {
      "bg-tomato": props.bgColor === "tomato",
      "bg-blue": props.bgColor === "blue",
      "bg-black": props.bgColor === "black",
      "bg-white": props.bgColor === "white",
      transparent: props.bgColor === "none",
    },
  ]);
  const buttonColor = cc([
    {
      "text-tomato": props.fontColor === "tomato",
      "text-blue": props.fontColor === "blue",
      "text-black": props.fontColor === "black",
      "text-white": props.fontColor === "white",
    },
  ]);
  const buttonWidth = cc([
    {
      "w-1/5": props.width === "small",
      "w-5/12": props.width === "medium",
      "w-2/3": props.width === "large",
    },
  ]);
  const buttonPadding = cc([
    {
      "px-2 py-0.5": props.size === "small",
      "px-3.5 py-1.5": props.size === "medium",
      "px-4.5 py-2.5": props.size === "large",
    },
  ]);
  const buttonFontSize = cc([
    {
      "text-small": props.size === "small",
      "text-medium": props.size === "medium",
      "text-large": props.size === "large",
    },
  ]);
  const buttonBorder = cc([
    {
      border: props.isBorder,
      "border-tomato": props.fontColor == "tomato",
    },
  ]);
  const buttonHover = cc([
    {
      "hover:opacity-80": props.hoverAction,
    },
  ]);
  const buttonRound = cc([
    {
      rounded: !props.isRounded,
      "rounded-full": props.isRounded,
    },
  ]);
  const buttonShadow = cc([
    {
      "drop-shadow-lg": props.isShadow,
    },
  ]);
  return (
    <button
      className={cc([
        buttonCommon,
        buttonBgColor,
        buttonColor,
        buttonWidth,
        buttonPadding,
        buttonFontSize,
        buttonBorder,
        buttonHover,
        buttonRound,
        buttonShadow,
        props.addClassNames,
      ])}
    >
      {props.children}
    </button>
  );
};
