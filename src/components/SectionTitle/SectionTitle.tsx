import Link from "next/link";

import cc from "classcat";

type SectionTitleProps = {
  title: string;
  isTitleFontSerif?: boolean;
  moreText?: string;
  moreLink?: string;
  addClassNames?: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const titleClass = cc(["text-large", props.addClassNames, { "font-serif": props.isTitleFontSerif }]);
  return (
    <div className="flex items-center justify-between px-4 font-bold">
      <h3 className={titleClass}>{props.title}</h3>
      {props.moreText && props.moreLink && (
        <Link href={{ pathname: props.moreLink }} className="text-gray">
          {props.moreText}
        </Link>
      )}
    </div>
  );
};
