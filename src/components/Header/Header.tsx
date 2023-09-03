import { UrlObject } from "url";
import Link from "next/link";

import { IconArrowLeft, IconMenu, IconUserCircle } from "@tabler/icons-react";
import cc from "classcat";

type Props = {
  title: string;
  addClassNames?: string;
  position?: "left" | "center";
  isUserIcon?: boolean;
  browserBackHref?: UrlObject;
  isMenuIcon?: boolean;
};

export const Header: React.FC<Props> = (props) => {
  const titleClass = cc([
    "w-full px-2 text-large font-bold",
    {
      "text-left": props.position === "left",
      "text-center": props.position === "center",
    },
  ]);
  return (
    <div className={cc(["flex items-center justify-between border-b border-lightGray p-4", props.addClassNames])}>
      <div className="w-6">
        {props.browserBackHref && (
          <Link href={props.browserBackHref}>
            <IconArrowLeft />
          </Link>
        )}
        {props.isMenuIcon && (
          <Link href="/settings">
            <IconMenu />
          </Link>
        )}
      </div>
      <h1 className={titleClass}>{props.title}</h1>
      <div className="w-6">
        {props.isUserIcon && (
          <Link href="/fav/my">
            <IconUserCircle className="w-6" />
          </Link>
        )}
      </div>
    </div>
  );
};
