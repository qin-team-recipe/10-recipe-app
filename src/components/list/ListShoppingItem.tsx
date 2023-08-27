import { Icon } from "@/components/Icon/Icon";

type ListShoppingItemProps = {
  id: number;
  name: string;
  is_checked: boolean;
  children?: React.ReactNode;
};

export const ListShoppingItem: React.FC<ListShoppingItemProps> = (props) => {
  return (
    <div key={props.id} className="flex justify-between border-b border-solid border-lightGray px-3 py-2">
      <div className="flex">
        <button className="p-1">
          {props.is_checked ? (
            <Icon type="CircleCheck" color="white" fillColor="lightGray" />
          ) : (
            <Icon type="Circle" color="tomato" />
          )}
        </button>
        <p className={props.is_checked ? "p-1 text-lightGray" : "p-1"}>{props.name}</p>
      </div>
      <div className="cursor-pointer p-1">
        <Icon type="DotsVertical" />
      </div>
    </div>
  );
};
