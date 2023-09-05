"use client";

import { useState } from "react";
import Image from "next/image";

import { clientComponentSupabase } from "@/lib/clientComponentSupabase";

import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon/Icon";

type LoginProps = {
  imageType: "favorite" | "shopping";
};

export const Login: React.FC<LoginProps> = (props) => {
  const [isLoginError, setIsLoginError] = useState(false);
  const googleLoginHandler = async () => {
    const { error } = await clientComponentSupabase.auth.signInWithOAuth({ provider: "google" });

    if (error) {
      setIsLoginError(true);
      return;
    }
  };

  return (
    <div className="text-center">
      <Image src={`/images/login_${props.imageType}.png`} width={300} height={300} alt="" className="mx-auto" />
      <p className="mb-4 text-large">ログインをお願いします</p>
      <p className="mb-4">こちらの機能を利用するにはログインが必要です</p>
      <div className="flex justify-center">
        <Button buttonColor="blue" addClassNames="mr-2 flex items-center" onClick={googleLoginHandler}>
          <Icon type="BrandGoogle" color="white" size="small" addClassNames="mr-1" />
          Googleログイン
        </Button>
        <Button buttonColor="black" addClassNames="flex items-center" isDisabled>
          <Icon type="BrandApple" color="white" size="small" addClassNames="mr-1" />
          Appleログイン
        </Button>
      </div>
      {isLoginError && (
        <p className="mt-4 font-bold text-red">
          ログインに失敗しました。時間を置いて再度お試しいただくか、お問い合わせください。
        </p>
      )}
    </div>
  );
};
