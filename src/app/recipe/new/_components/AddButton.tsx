import { Plus } from "@/components/icons";

type Props = {
  title: string;
};

export const AddButton: React.FC<Props> = (props) => {
  return (
    <button className="ml-4 mt-2 flex items-center gap-1">
      <Plus />
      <p className="text-tomato">{props.title}</p>
    </button>
  );
};
