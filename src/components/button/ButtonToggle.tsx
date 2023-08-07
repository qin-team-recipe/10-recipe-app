import { Button } from "@/components/button";

type ButtonToggleProps = {
  // クリック前のボタン内テキスト
  initialText: string;
  // クリック後のボタン内テキスト
  clickedText: string;
  // クリック済みかどうか
  isChecked?: boolean;
};

export const ButtonToggle: React.FC<ButtonToggleProps> = (props) => {
  return (
    <Button
      bgColor={props.isChecked ? "white" : "tomato"}
      fontColor={props.isChecked ? "tomato" : "white"}
      fontSize="small"
      isBorder={props.isChecked}
    >
      {props.isChecked ? props.clickedText : props.initialText}
    </Button>
  );
};
