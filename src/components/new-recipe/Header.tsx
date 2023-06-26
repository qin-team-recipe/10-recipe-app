import { CloseButton } from "@/components/icon";

export const Header = () => {
  return (
    <div className="flex items-center justify-between border-b border-lightGray px-3 py-4">
      <CloseButton />
      <div className="flex items-center gap-4 font-bold">
        <button className="text-gray">下書き</button>
        <button className="text-tomato">作成する</button>
      </div>
    </div>
  );
};
