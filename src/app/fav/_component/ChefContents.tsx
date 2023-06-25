/* eslint-disable tailwindcss/no-custom-classname */
import { ChefCard } from "@/app/fav/_component";

export const ChefContents = () => {
  const chefCards = Array.from({ length: 10 }).map((_, i) => {
    return <ChefCard key={i} />;
  });

  const scrollBarStyle = {
    scrollbarWidth: "none" /* Firefox */,
    "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
    "&::-webkit-scrollbar": {
      /* WebKit */ display: "none",
    },
    overflowX: "scroll",
    whiteSpace: "nowrap",
  };

  return (
    <div>
      <div className="flex items-end justify-between px-4 font-bold">
        <div className="text-large">シェフ</div>
      </div>
      <div className="hidden-scrollbar overflow-x-scroll whitespace-nowrap px-2 py-4">
        <div className="table min-w-full">
          <div className="flex gap-4 px-4">{chefCards}</div>
        </div>
      </div>
    </div>
  );
};
