"use client";

import React, { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export type NavProps = LinkProps<any> & { children: ReactElement; activeClassName: string; activeColor?: string };

export const NavLink = (props: NavProps) => {
  const { activeClassName, activeColor, children, ...linkProps } = props;
  const router = usePathname();
  const pathname = router === "/root" ? "/" : router;

  const isActive = pathname === linkProps.href;

  const className = isActive ? `${activeClassName} ${children.props.className ?? ""}` : children.props.className ?? "";

  const child = React.cloneElement(children, {
    className,
    color: isActive && activeColor ? activeColor : children.props.color,
  });

  return <Link {...linkProps}>{child}</Link>;
};
