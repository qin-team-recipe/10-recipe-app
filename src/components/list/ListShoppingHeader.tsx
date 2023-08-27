import { Icon } from "@/components/Icon/Icon";

type ListShoppingHeaderProps = {
  title: string;
  children?: React.ReactNode;
};

export const ListShoppingHeader: React.FC<ListShoppingHeaderProps> = (props) => {
  return (
    <div className="mt-3 flex justify-between border-b border-solid border-lightGray px-4 py-3">
      <p className="truncate text-large font-bold">{props.title}</p>
      <p className="flex w-16 cursor-pointer justify-between text-large">
        <Icon type="Plus" />
        <Icon type="DotsCircleHorizontal" addClassNames="rotate-90" />
      </p>
    </div>
  );
};
