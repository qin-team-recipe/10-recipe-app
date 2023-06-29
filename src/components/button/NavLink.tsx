"use client";

import { cloneElement, type ReactElement } from "react";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

/**
 * @package
 */
export type NavProps = LinkProps<any> & { children: ReactElement; activeClassName: string; activeStrokeColor: string };
//  型がわからなくてanyになっています😅

export const NavLink = (props: NavProps) => {
  const { activeClassName, children, activeStrokeColor, ...linkProps } = props;
  const router = usePathname();
  const pathname = router === "/root" ? "/" : router;

  const className =
    pathname === linkProps.href
      ? `${activeClassName} ${children.props.className ?? ""} ${activeStrokeColor}`
      : children.props.className ?? "";

  return <Link {...linkProps}>{cloneElement(children, { className })}</Link>;
};
