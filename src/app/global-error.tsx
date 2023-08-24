"use client";

import { useEffect } from "react";

import { ErrorComponent } from "@/components/ErrorComponent";

// NOTE: 何度も同じ物を書く必要があるのでpropsの型は例外で外で定義しない
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // 本来はホスティング先にLog出力するなどする
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <ErrorComponent
      title="データの取得に失敗しました。"
      text="時間を置いて再度試していただくか再読み込みボタンで読み込み直しを行なってください。"
      reFetchText="再読み込み"
      reFetchFunc={reset}
    />
  );
};

export default Error;
