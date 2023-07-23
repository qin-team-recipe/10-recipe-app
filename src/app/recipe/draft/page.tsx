import { mockDataDraftRecipe } from "@/mock/NewRecipe";

import { Icon } from "@/components/icon/Icon";

const Page = () => {
  return (
    <div className="h-screen">
      <header className="flex gap-4 px-3 py-4">
        <Icon type="ArrowLeft" color="gray" />
        <h3 className="font-bold text-gray">下書き</h3>
      </header>
      <div>
        {mockDataDraftRecipe.map((data) => (
          <div
            key={data.id}
            className="flex items-center justify-between border-t border-lightGray px-4 py-2 last:border-b"
          >
            <div className="flex flex-col gap-1">
              <h3>{data.title}</h3>
              <p className="text-small text-gray">作成日時: {data.createdAt}</p>
            </div>
            <Icon type="DotsVertical" color="gray" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
