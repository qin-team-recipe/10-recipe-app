import cc from "classcat";

import { Icon } from "@/components/Icon/Icon";

type InputAddButtonProps = {
  text: string;
  onClick: () => void;
  addClassNames?: string;
};

export const InputAddButton: React.FC<InputAddButtonProps> = (props) => {
  return (
    <button
      className={cc(["flex items-center gap-x-1 text-medium text-tomato", props.addClassNames])}
      onClick={props.onClick}
    >
      <Icon type="Plus" color="tomato" size="small" />
      {props.text}
    </button>
  );
};
