import Link from "next/link";

import { Icon } from "@/components/Icon/Icon";

export const RecipeFormHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-lightGray px-3 py-4">
      <Link href="/fav" className="h-6">
        <Icon type="CloseButton" size="medium" />
      </Link>
      <Link href="/" className="font-bold text-gray">
        下書き一覧
      </Link>
    </header>
  );
};
