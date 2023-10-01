import { Icon } from "@/components/Icon/Icon";

type ShoppingListHeaderProps = {
  title: string;
  userId?: string;
  onAddFunc: () => void;
};

export const ShoppingListHeader: React.FC<ShoppingListHeaderProps> = (props) => {
  return (
    <div className="flex items-center justify-between border-b border-lightGray px-4 py-3">
      <h3 className="line-clamp-1 font-bold">{props.title}</h3>
      <div className="flex gap-3">
        <button onClick={() => props.onAddFunc()}>
          <Icon type="Plus" color="gray" />
        </button>
        <Icon type="DotsCircleHorizontal" color="gray" />
      </div>
    </div>
  );
};
