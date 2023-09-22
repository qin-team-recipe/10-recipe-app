import Link from "next/link";

import cc from "classcat";

type ButtonProps = {
  children: React.ReactNode;
  buttonColor: "tomato" | "gray" | "blue" | "black" | "white";
  onClick?: () => void;
  href?: string;
  addClassNames?: string;
  type?: "button" | "submit";
  isDisabled?: boolean;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const buttonColor = cc([
    "rounded px-3 py-1 text-medium",
    {
      "bg-gray text-white": props.buttonColor === "gray",
      "bg-tomato text-white": props.buttonColor === "tomato",
      "bg-blue text-white": props.buttonColor === "blue",
      "bg-black text-white": props.buttonColor === "black",
      "bg-white text-tomato border border-tomato": props.buttonColor === "white",
      "bg-gray text-white opacity-50 pointer-events-none": props.isDisabled,
    },
    props.addClassNames,
  ]);

  return props.href ? (
    <Link href={{ pathname: props.href }} className={buttonColor}>
      {props.children}
    </Link>
  ) : (
    <button className={buttonColor} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};
