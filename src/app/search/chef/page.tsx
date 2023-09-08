import Link from "next/link";
import { redirect } from "next/navigation";

import { serverComponentSupabase } from "@/lib/serverComponentSupabase";

import { Icon } from "@/components/Icon/Icon";
import { ImageComponent, ImageGrid } from "@/components/Image";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { TabLinks, type Tab } from "@/components/TabLinks/TabLinks";
import { type ChefList } from "@/app/api/chef/route";

const SearchChefPage = async () => {
  const chefsSortNameResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef/`, { cache: "no-store" });
  const chefsSortName: ChefList = await chefsSortNameResponse.json();

  // セッション情報はあるが、ユーザー情報がない場合はユーザー登録画面にリダイレクト
  const {
    data: { session },
  } = await serverComponentSupabase.auth.getSession();
  if (session && session.user.id) {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef/${session.user.id}`, { cache: "no-store" });
    const userJson = await user.json();

    if (userJson === null) {
      redirect("/signUp");
    }
  }

  const tabs: Tab[] = [
    {
      label: "シェフ",
      href: `/search/chef`,
      isActive: true,
    },
    {
      label: "レシピ",
      href: `/search/recipe`,
    },
  ];

  return (
    <div>
      <SearchBar />
      <TabLinks tabs={tabs} />
      <div className="mt-5">
        {chefsSortName.length > 0 && (
          <div className="mb-8 space-y-2">
            <SectionTitle title="シェフ一覧" isTitleFontSerif />
            <ImageGrid>
              {chefsSortName.map((chef) => (
                <Link href={`/chef/${chef.id}`} key={chef.id}>
                  <div className="flex gap-4">
                    <ImageComponent
                      alt={`${chef.name}の画像`}
                      src={chef.image_url}
                      isRounded
                      isShadow
                      ratio="3/4"
                      width="small"
                    />
                    <div>
                      <p className="font-bold">{chef.name}</p>
                      <p className="line-clamp-3 text-medium text-gray">{chef.description}</p>
                      <span className="flex items-center text-medium">
                        <Icon type="ToolsKitchen2" size="small" />
                        {` ${chef._count.Recipe} レシピ`}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </ImageGrid>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchChefPage;
