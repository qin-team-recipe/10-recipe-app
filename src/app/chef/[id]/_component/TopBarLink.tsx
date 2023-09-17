// TODO ここで外部リンクを取得したい
import Link from "next/link";

import { Icon } from "@/components/Icon/Icon";
import { Popover } from "@/components/Popover";

// import { PopoverItems, PopoverItemsProps } from "@/components/Popover/PopoverItems";

export const TopBarLink = () => {
  // const items: PopoverItemsProps[] = [{ href: `/chef/${id}/edit`, text: "プロフィールを編集する", icon: "Edit" }];
  return (
    <div className="relative z-20 flex justify-between p-4">
      <Link href="/fav">
        <Icon type="ArrowLeft" color="black" />
      </Link>
      {}
      <Popover>
        {/* {items.map((item, i) => (
          <PopoverItems {...item} key={i} />
        ))} */}
      </Popover>
    </div>
  );
};
