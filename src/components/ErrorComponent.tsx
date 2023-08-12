import Image from "next/image";

import { Button } from "@/components/button";

type ErrorProps = {
  title?: string;
  text: string;
  isHideImage?: boolean;
  reFetchText?: string;
  reFetchFunc?: () => void;
};

// NOTE: Errorのままだと呼び出し元のError.tsxで名前被りが発生するのでErrorComponentとする
export const ErrorComponent: React.FC<ErrorProps> = (props) => {
  return (
    <div className="px-4 text-center">
      {!props.isHideImage && <Image src="/images/error.png" width={300} height={300} alt="" className="mx-auto" />}
      {props.title && <p className="mb-4 text-large font-bold">{props.title}</p>}
      <p>{props.text}</p>
      {/* TODO: ボタンコンポにイベントが渡せるようになったら実装 */}
      {/* <Button onClick={props.reFetch}>再読み込み</Button> */}
      {props.reFetchText && props.reFetchFunc && <Button>{props.reFetchText}</Button>}
    </div>
  );
};
