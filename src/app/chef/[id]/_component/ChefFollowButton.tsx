"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ToggleButton } from "@/components/Button/ToggleButton";
import { PostFollowParams } from "@/app/api/follow/[id]/route";

type ChefFollowButtonProps = {
  loginUserId?: string;
  targetUserId: string;
};

export const ChefFollowButton: React.FC<ChefFollowButtonProps> = (props) => {
  const [isFollow, setIsFollow] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!props.loginUserId) return;
    const followCheck = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/follow/${props.loginUserId}?id=${props.targetUserId}`,
        { cache: "no-store" }
      );
      const followData = await res.json();
      setIsFollow(!!followData);
    };
    followCheck();
  }, [props.loginUserId, props.targetUserId, router]);

  const handleClick = async () => {
    // ログインしていない場合は登録画面にリダイレクト
    if (!props.loginUserId) {
      router.push("/signUp");
    }

    const operation: PostFollowParams = { followed_id: props.targetUserId };
    try {
      if (isFollow) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/follow/${props.loginUserId}?id=${props.targetUserId}`, {
          method: "DELETE",
        });
        setIsFollow(false);
      } else {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/follow/${props.loginUserId}`, {
          method: "POST",
          body: JSON.stringify(operation),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setIsFollow(true);
      }
    } catch (e) {
      setIsError(true);
    }
  };

  return (
    <div>
      <ToggleButton isCheck={isFollow} onClick={handleClick}>
        {isFollow ? "フォロー中" : "フォローする"}
      </ToggleButton>
      {isError && (
        <p className="text-red">{`${
          isFollow ? "フォロー解除" : "フォロー"
        }が出来ませんでした。時間を置いて再度試していただくか、管理者にお問い合わせください。`}</p>
      )}
    </div>
  );
};
