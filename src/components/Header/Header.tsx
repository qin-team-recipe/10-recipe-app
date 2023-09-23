import { UrlObject } from "url";
import Link from "next/link";

import cc from "classcat";

import { Icon } from "@/components/Icon/Icon";

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
            <Icon type="ArrowLeft" />
          </Link>
        )}
        {props.isMenuIcon && (
          <Link href="/settings">
            <Icon type="Menu" />
          </Link>
        )}
      </div>
      <h1 className={titleClass}>{props.title}</h1>
      <div className="w-6">
        {props.isUserIcon && (
          <Link href="/fav">
            <Icon type="UserCircle" />
          </Link>
        )}
      </div>
    </div>
  );
};
