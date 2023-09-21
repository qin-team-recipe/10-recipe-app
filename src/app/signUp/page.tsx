"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getAuthDataForClient } from "@/lib/getAuthData/getAuthDataForClient";
import { InputNameSchema, InputNameSchemaType } from "@/types/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";

import { Button } from "@/components/Button";
import { InputText } from "@/components/Form";
import { Header } from "@/components/Header/Header";
import { CreateUserPostParams } from "@/app/api/chef/route";

const SignUpPage = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputNameSchemaType>({ resolver: zodResolver(InputNameSchema) });

  useEffect(() => {
    const getSession = async () => {
      const { session, userData } = await getAuthDataForClient();

      // セッション情報がない、またはユーザー登録データがあればトップにリダイレクト
      if (!session?.user.id || userData) {
        router.push("/");
      }
      setUserId(session?.user.id || "");
    };

    getSession();
  }, [router]);

  const onSubmit: SubmitHandler<InputNameSchemaType> = async (data) => {
    const postData: CreateUserPostParams = {
      id: userId,
      name: data.name,
      image_url: "",
      description: "",
    };

    // ユーザー登録
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef`, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push(`/chef/${userId}`);
    } catch (e) {
      throw new Error();
    }
  };

  return (
    <div>
      <Header title="新規登録" position="center" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="ニックネーム"
          addClassNames="my-4"
          errorText={errors["name"]?.message}
          register={register("name")}
        />
        <div className="flex gap-4 px-4">
          <Button buttonColor="tomato" addClassNames="w-full" type="submit">
            登録する
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
