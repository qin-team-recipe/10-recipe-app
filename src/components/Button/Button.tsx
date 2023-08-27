import cc from "classcat";

type ButtonProps = {
  children: React.ReactNode;
  // ボタンの色
  color?: "tomato" | "white" | "gray";
  // clickEvent
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const buttonColor = cc([
    "rounded-lg px-3 py-1 text-medium text-white",
    {
      "bg-gray": props.color === "gray",
      "bg-tomato": props.color === "tomato",
    },
  ]);
  return (
    <button className={buttonColor} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
