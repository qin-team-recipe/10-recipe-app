import Link from "next/link";

import { Icon } from "@/components/Icon/Icon";
import { Form } from "@/app/recipe/new/_components/Form";

const Page = () => {
  return (
    <div className="bg-lightGray2">
      <header className="flex items-center justify-between border-b border-lightGray6 px-3 py-4">
        <button className="h-6 w-6">
          <Icon type="CloseButton" />
        </button>
        <div className="flex items-center gap-4 font-bold">
          <Link href="/" className="text-gray">
            下書き一覧
          </Link>
        </div>
      </header>
      <Form />
    </div>
  );
};

export default Page;
