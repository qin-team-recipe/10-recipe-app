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
  return !props.isChecked ? (
    <Button fontSize="small">{props.initialText}</Button>
  ) : (
    <Button bgColor="white" fontColor="tomato" fontSize="small" isBorder>
      {props.clickedText}
    </Button>
  );
};
