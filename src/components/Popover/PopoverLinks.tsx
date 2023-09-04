import React from "react";
import Link from "next/link";

import { Icon, IconType } from "@/components/Icon/Icon";

export type PopoverLinksProps = {
  className?: string;
  text: string;
  href: string;
  icon: IconType;
};

export const PopoverLinks: React.FC<PopoverLinksProps> = (props) => {
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
