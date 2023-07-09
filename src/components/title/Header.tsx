import { IconArrowLeft, IconMenu, IconUserCircle } from "@tabler/icons-react";
import cc from "classcat";

type Props = {
  title: string;
  addClassNames?: string;
  position?: "left" | "center";
  isUserIcon?: boolean;
  isBrowserBackIcon?: boolean;
  isMenuIcon?: boolean;
};

const HeaderLayout: React.FC<Props> = (props) => {
  const sizeClass = cc(["flex items-center justify-between border-b border-lightGray p-4"]);
  const titleClass = cc([
    {
      "text-left": props.position === "left",
      "text-center": props.position === "center",
    },
  ]);
  return (
    <div className={cc([titleClass, sizeClass, props.addClassNames])}>
      <div className="w-6">
        {props.isBrowserBackIcon && <IconArrowLeft />}
        {props.isMenuIcon && <IconMenu />}
      </div>
      <h1 className="w-full px-2 text-large font-bold">{props.title}</h1>
      <div className="w-6">{props.isUserIcon && <IconUserCircle className="w-6" />}</div>
    </div>
  );
};
export default HeaderLayout;
