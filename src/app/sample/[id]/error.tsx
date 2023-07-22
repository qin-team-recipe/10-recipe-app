"use client";

import { useEffect } from "react";

// TODO: 仮のエラーページなので他でちゃんとしたものに置き換える
const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    // 本来はホスティング先にLog出力するなどする
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return <p>エラーページです。</p>;
};

export default Error;
