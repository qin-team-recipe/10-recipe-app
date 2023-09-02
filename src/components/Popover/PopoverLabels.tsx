import React from "react";
import Link from "next/link";

import { Icon, IconType } from "@/components/Icon/Icon";

// 多分ここでonClickも渡して条件分岐させるのかな。。
export type PopoverLabelsProps = {
  className?: string;
  text: string;
  href: string;
  icon: IconType;
};

const PopoverLabels: React.FC<PopoverLabelsProps> = (props) => {
  return (
    <Link href={{ pathname: props.href }} className="flex whitespace-nowrap" key={props.href}>
      <Icon color="black" type={props.icon} />
      {props.text}
    </Link>
  );
};

export default PopoverLabels;
