import { NextPage } from "next";
import Link from "next/link";

import { Icon } from "@/components/icon/Icon";

const LinkTitle = [
  // TODO：プログラム的に外部リンクを判定させたい気持ちも...
  // 運営会社・お問い合わせの外部リンクは後日提供
  { title: "利用規約", url: "settings/tos", isExternalLink: false },
  { title: "プライバシーポリシー", url: "settings/privacy", isExternalLink: false },
  { title: "運営会社", url: "https://xxxx.com", isExternalLink: true },
  { title: "お問い合わせ", url: "https://xxxx.com/contact", isExternalLink: true },
];

const SettingsPage: NextPage = () => {
  return (
    <div className="min-h-screen">
      <div className="flex border-b border-lightGray p-1.5">
        <div className="h-4">
          {/* pathname:このやり方でないとBuildエラーになる... */}
          <Link href={{ pathname: "/fav" }}>
            <Icon type="ArrowLeft" color="black" />
          </Link>
        </div>
        <div className="py-2 leading-4">設定</div>
      </div>
      <div className="flex flex-col justify-between gap-3 p-4">
        <div>
          <p className="pb-4 font-semibold">利用規約や問い合わせ</p>
          <ul className="flex flex-col gap-4">
            {LinkTitle.map((l) => {
              return (
                <li key={l.title} className="flex justify-between">
                  {l.title}
                  {/* pathname:このやり方でないとBuildエラーになる... */}
                  <Link href={{ pathname: l.url }} target={l.isExternalLink ? `_blank` : `_self`}>
                    <Icon size="medium" type={l.isExternalLink ? `ExternalLink` : `ChevronRight`} color="gray" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p className="pb-4 pt-8 font-semibold ">アカウントの操作</p>
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between">
              <Link href="/settings/logout">ログアウト</Link>
              <Icon type={"Logout"} color="gray" />
            </li>
          </ul>
        </div>
        <div>
          <p className="pb-4  pt-8 font-semibold ">取り消しができない操作</p>
          <ul className="flex  justify-between">
            {/* TODO：確認モーダルを出して delete と打ったら削除するロジック */}
            <li>退会する</li>
            <Icon type="ZoomExclamation" color="gray" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
