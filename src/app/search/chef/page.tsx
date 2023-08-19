import Link from "next/link";

import { User } from "@prisma/client";

import { Header } from "@/components/Header";
import { ImageComponent, ImageGrid } from "@/components/image";
import { Tab, TabLinks } from "@/components/TabLinks";

const ListChefPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef`, { next: { revalidate: 1 } });
  const chefs: User[] = await res.json();
  const tabs: Tab[] = [
    {
      label: "レシピ",
      href: `/search/recipe`,
    },
    {
      label: "シェフ",
      href: `/search/chef`,
      isActive: true,
    },
  ];
  return (
    <div>
      <Header isSearchBar />
      <TabLinks tabs={tabs} />
      <div className="space-y-2">
        <div className="flex items-center justify-between px-4 pt-4 font-bold">
          <p className="text-large">シェフ一覧</p>
        </div>
        <div className="space-y-2 ">
          <ImageGrid isTwoColumns={false} addClassNames="mb-8">
            {chefs.slice(0, 10).map((data, index) => (
              <Link href={{ pathname: `/chef/${index}` }} key={`grid-${index}`} className="flex gap-4">
                <ImageComponent src={data.image_url} isRounded alt={`${data.name}の画像`} width="small" ratio="3/4" />
              </Link>
            ))}
          </ImageGrid>
        </div>
      </div>
    </div>
  );
};

export default ListChefPage;
