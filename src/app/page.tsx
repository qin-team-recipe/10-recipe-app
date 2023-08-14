import { NextPage } from "next";

import { Header } from "@/components/Header";

const Page: NextPage = () => {
  return (
    <div className="text-tomato">
      <Header isSearchBar addClassNames="px-0" />
    </div>
  );
};

export default Page;
