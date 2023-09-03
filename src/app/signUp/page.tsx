"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { clientComponentSupabase } from "@/lib/clientComponentSupabase";
import { z, ZodError } from "zod";

import { Button } from "@/components/Button";
import { InputText } from "@/components/Form";
import { Header } from "@/components/Header/Header";

const schema = z
  .string()
  .min(1, "ニックネームは一文字以上で入力してください")
  .max(20, "ニックネームは20文字以下で入力してください");

const SignUpPage = () => {
  const router = useRouter();
  // ログイン済みでユーザー登録済みの場合はトップページにリダイレクト
  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await clientComponentSupabase.auth.getSession();
      if (session && session.user.id) {
        const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef/${session.user.id}`, {
          cache: "no-store",
        });
        const userJson = await user.json();

        if (userJson) {
          router.push("/");
        }
      }
    };

    getSession();
  }, [router]);

  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // バリデーション
    try {
      schema.parse(name);
      setErrorMessage("");
    } catch (e) {
      if (e instanceof ZodError) {
        setErrorMessage(e.errors[0].message);
      }
      return;
    }

    // ユーザー登録
  };

  return (
    <div>
      <Header title="新規登録" position="center" />
      <form onSubmit={handleSubmit}>
        <InputText
          label="ニックネーム"
          onChange={handleChange}
          addClassNames="my-4"
          value={name}
          errorText={errorMessage}
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
