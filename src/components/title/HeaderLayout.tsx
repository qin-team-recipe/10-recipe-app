import React from "react";

import { IconArrowLeft, IconMenu, IconUserCircle } from "@tabler/icons-react";
import cc from "classcat";

type Props = {
  title: string;
  addClassNames?: string;
  position?: "left" | "center";
  userCircle?: boolean;
  arrowLeft?: boolean;
  menu?: boolean;
};

export const HeaderLayout: React.FC<Props> = (props) => {
  const sizeClass = cc([
    "relative flex items-center border-b border-lightGray p-1",
    {
      "justify-start px-12": props.position === "left",
      "justify-center": props.position === "center",
    },
  ]);
  return (
    <div className={cc([props.addClassNames])}>
      <div className={cc([sizeClass, "mx-auto text-title font-bold"])}>
        <h1>{props.title}</h1>
        {props.userCircle && (
          <div className="absolute right-0 flex  h-full items-center">
            <button>
              <IconUserCircle />
            </button>
          </div>
        )}
        {props.arrowLeft && (
          <div className="absolute left-0 flex  h-full items-center px-4">
            <button>
              <IconArrowLeft />
            </button>
          </div>
        )}
        {props.menu && (
          <div className="absolute left-0 flex  h-full items-center px-4">
            <button>
              <IconMenu />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
