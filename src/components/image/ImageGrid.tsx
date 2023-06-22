type ImageGridProps = {
  // 追加のクラス
  addClassNames?: string;
  children: React.ReactNode;
};

export const ImageGrid: React.FC<ImageGridProps> = (props) => {
  return (
    <div className={props.addClassNames}>
      <div className="grid grid-cols-2 gap-4 px-4">{props.children}</div>
    </div>
  );
};
