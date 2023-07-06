import Link from "next/link";

import { TabLinks } from "@/components/tab";
import { TopSection } from "@/app/chef/[id]/_common";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 上記参考に動的ルーティングに対応しておりますが、DBと合わせた際の挙動まで考えて実装していません。

const ChefPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const tabMock = [
    {
      label: "レシピ",
      href: `/chef/${id}`,
    },
    {
      label: "リンク",
      href: `/chef/${id}/link`,
    },
  ];
  return (
    <div className="relative mx-auto">
      <TopSection
        params={{
          id: `${id}`,
        }}
      />
      <div>
        <TabLinks tabMock={tabMock} />
      </div>
      <div className="mb-8 mt-4">
        <ul className="pl-3">
          <li className="flex border-b border-lightGray pb-3">
            <div className="mr-2 h-10 w-10 bg-tomato" />
            <div className="flex flex-col">
              Instagram<div></div>
              <div className="text-small">{} フォロワー ・</div>
              {}
            </div>
          </li>
          <li className="flex border-b border-lightGray py-3">
            <div className="mr-2 h-10 w-10 bg-tomato" />
            <div className="flex flex-col">
              Twitter<div></div>
              <div className="text-small">{} フォロワー ・</div>
              {}
            </div>
          </li>
          <li className="flex border-b border-lightGray py-3">
            <div className="mr-2 h-10 w-10 bg-tomato" />
            <div className="flex flex-col">
              YouTube<div></div>
              <div className="text-small">{} フォロワー ・</div>
              {}
            </div>
          </li>
          <li className="flex border-b border-lightGray py-3">
            <div className="mr-2 h-10 w-10 bg-tomato" />
            <div className="flex flex-col">
              Hoge Hoge<div></div>
              <div className="text-small">
                <Link target="_blank" href={{ pathname: `https://example.com/` }}>
                  https://example.com/
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChefPage;
