"use client";

import { cloneElement, type ReactElement } from "react";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

/**
 * @package
 */
type Props = LinkProps<any> & { children: ReactElement; activeClassName: string };
//  型がわからなくてanyになっています😅

export const NavLink = (props: Props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { activeClassName, children, ...linkProps } = props;
  const router = usePathname();
  const pathname = router === "/root" ? "/" : router;

  const className =
    pathname === linkProps.href
      ? `${activeClassName} ${children.props.className ?? ""}`
      : children.props.className ?? "";

  return <Link {...linkProps}>{cloneElement(children, { className })}</Link>;
};
