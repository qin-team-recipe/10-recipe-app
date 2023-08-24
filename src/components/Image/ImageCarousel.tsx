type ImageCarouselProps = {
  // 追加のクラス
  addClassNames?: string;
  children: React.ReactNode;
};

export const ImageCarousel: React.FC<ImageCarouselProps> = (props) => {
  return (
    <div className={props.addClassNames}>
      <div className="hidden-scrollbar flex gap-x-4 overflow-x-auto px-4">{props.children}</div>
    </div>
  );
};
