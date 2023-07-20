import Link from "next/link";

import { Icon } from "@/components/icon/Icon";

const SettingsPage = () => {
  return (
    <div className="min-h-screen">
      <div className="flex items-center border-b border-lightGray p-1.5">
        <div className="">
          {/* ↓pathname この書き方でないとWarningになる。自分の環境だけ？💦 */}
          <Link href={`pathname: /fav`}>
            <Icon type="ArrowLeft" color="black" />
          </Link>
        </div>
        <div className="py-2">設定</div>
      </div>
      SettingsPage
    </div>
  );
};

export default SettingsPage;
