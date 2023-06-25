/* eslint-disable tailwindcss/no-custom-classname */
import { NextPage } from "next";

import { ChefContents, FavRecipeContents, NewRecipeContents, SectionContainer } from "@/app/fav/_component";

const Fav: NextPage = () => (
  <div>
    <div className="relative flex h-12  items-center justify-between border-b border-lightGray">
      <div className="mx-auto text-title font-bold">お気に入り</div>
      <div className="p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-5 w-5"
        >
          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
        </svg>
      </div>
    </div>
    <div className="space-y-12 py-5">
      <div className="space-y-2">
        <section>
          <SectionContainer>
            <ChefContents />
          </SectionContainer>
        </section>
      </div>
      <div className="space-y-2">
        <section>
          <SectionContainer>
            <NewRecipeContents />
          </SectionContainer>
        </section>
      </div>
      <div className="space-y-12">
        <div className="space-y-2">
          <section>
            <SectionContainer>
              <FavRecipeContents />
            </SectionContainer>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default Fav;
