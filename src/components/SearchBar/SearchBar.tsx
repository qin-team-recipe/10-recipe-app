import { Icon } from "@/components/Icon/Icon";

type SearchBarProps = {
  isBackACtion?: boolean;
};

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <div className="flex items-center p-4">
      {props.isBackACtion && <Icon type="ArrowLeft" addClassNames="mr-2" />}
      <div className="relative w-full">
        <input type="text" className="w-full rounded bg-lightGray py-1 pl-9 pr-2" placeholder="シェフやレシピを検索" />
        <Icon type="Search" addClassNames="absolute left-2 top-1" color="gray" />
      </div>
    </div>
  );
};
