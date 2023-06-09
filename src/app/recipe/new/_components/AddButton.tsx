import { Icon } from "@/components/icon/Icon";

type Props = {
  title: string;
};

export const AddButton: React.FC<Props> = (props) => {
  return (
    <button className="ml-4 mt-2 flex items-center gap-1">
      <Icon type="Plus" />
      <p className="text-tomato">{props.title}</p>
    </button>
  );
};
