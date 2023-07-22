import { User } from "@prisma/client";

import { ImageComponent } from "@/components/image";

const RouteSamplePage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chef/${params.id}`, { next: { revalidate: 1 } });
  const chef: User = await res.json();

  return (
    <>
      {/* 取得してきたデータの使い方 */}
      <ImageComponent
        key={chef.id}
        src={chef.image_url}
        alt={`${chef.name}の画像`}
        nameLabel={chef.name}
        ratio="3/4"
        width="full"
        addClassNames="mb-8"
      />
    </>
  );
};

export default RouteSamplePage;
