import Image from "next/image";

import cc from "classcat";

type ImageComponentProps = {
  // 画像のタイトル
  title?: string;
  // 追加のクラス
  addClassNames?: string;
  // 画像ソース
  alt: string;
  // 画像の説明
  description?: string;
  // 画像の説明の位置
  descriptionAlign?: "left" | "center" | "right";
  // お気に入りの数
  favNum?: number;
  // 円形の画像かどうか
  isCircle?: boolean;
  // 画像の角を丸くするかどうか
  isRounded?: boolean;
  // 画像左下のラベル
  nameLabel?: string;
  // 画像のアスペクト比
  ratio: "1/1" | "3/4";
  // 画像の代替テキスト
  src: string;
  // 画像の幅
  width: "full" | "large" | "medium" | "small" | "xSmall" | "xxSmall";
  // 遷移先のURL
  url?: string;
};

// next/imageと区別するために、ImageComponentで定義
export const ImageComponent: React.FC<ImageComponentProps> = (props) => {
  const sizeClass = cc([
    {
      "w-6": props.width === "xxSmall",
      "w-16": props.width === "xSmall",
      "w-24": props.width === "small",
      "w-32": props.width === "medium",
      "w-40": props.width === "large",
      "w-full": props.width === "full",
    },
  ]);

  const imageSizeClass = cc([
    "relative",
    {
      "aspect-3/4": props.ratio === "3/4",
      "aspect-square": props.ratio === "1/1",
    },
    sizeClass,
  ]);

  const imageOptionClass = cc([
    "object-cover",
    {
      "rounded-2xl": props.isRounded,
      "rounded-full": props.isCircle,
    },
  ]);

  const descriptionClass = cc([
    "line-clamp-1 text-small text-gray",
    {
      "text-center": props.descriptionAlign === "center",
      "text-right": props.descriptionAlign === "right",
    },
  ]);

  return (
    <div className={cc([sizeClass, props.addClassNames])}>
      <div className={imageSizeClass}>
        <Image
          src={props.src || "/images/sample_chef.jpg"}
          alt={props.alt}
          fill
          className={imageOptionClass}
          priority={props.width === "full"}
          quality={props.width === "full" ? 100 : 80}
          sizes="20vw"
        />
        {props.nameLabel && (
          <p className="absolute bottom-3 left-3 text-large font-bold text-white">{props.nameLabel}</p>
        )}
        {props.favNum && (
          <span className="absolute right-2 top-2 rounded-2xl bg-black/60 px-2 py-1 text-medium text-white">
            {props.favNum.toLocaleString()}
          </span>
        )}
      </div>
      {(props.title || props.description) && (
        <div className="pt-1">
          {props.title && <p className="mb-1 line-clamp-2 h-11 text-medium font-bold text-black">{props.title}</p>}
          {props.description && <p className={descriptionClass}>{props.description}</p>}
        </div>
      )}
    </div>
  );
};
