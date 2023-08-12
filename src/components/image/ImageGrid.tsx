import cc from "classcat";

type ImageGridProps = {
  // 追加のクラス
  addClassNames?: string;
  children: React.ReactNode;
  isTwoColumns?: boolean;
};

export const ImageGrid: React.FC<ImageGridProps> = (props) => {
  const gridClass = cc([
    {
      "grid-cols-2": props.isTwoColumns,
    },
  ]);

  return (
    <div className={props.addClassNames}>
      <div className={`grid gap-4 px-4 ${gridClass}`}>{props.children}</div>
    </div>
  );
};
