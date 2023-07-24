import Link from "next/link";

import { Icon } from "@/components/icon/Icon";
import { Form } from "@/app/recipe/new/_components/Form";

const Page = () => {
  return (
    <div>
      <header className="flex items-center justify-between border-b border-lightGray px-3 py-4">
        <Icon type="CloseButton" />
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
