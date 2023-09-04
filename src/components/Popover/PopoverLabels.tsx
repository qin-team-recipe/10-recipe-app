import React from "react";
import Link from "next/link";

import { Icon, IconType } from "@/components/Icon/Icon";

export type PopoverLabelsProps = {
  className?: string;
  text: string;
  href: string;
  icon: IconType;
};

export const PopoverLabels: React.FC<PopoverLabelsProps> = (props) => {
  return (
    <Link
      href={{ pathname: props.href }}
      className="flex items-center whitespace-nowrap pb-1 text-small text-gray"
      key={props.href}
    >
      <Icon color="gray" type={props.icon} />
      {props.text}
    </Link>
  );
};
