import cc from "classcat";

import { Edit, Plus } from "@/components/icon";
import { ImageCarousel, ImageComponent } from "@/components/image";
import { Header } from "@/components/new-recipe/Header";

const Page = () => {
  const TitleClass = cc(["mb-1 ml-4 font-bold text-black"]);

  const imageData = ["/images/sample_chef.jpg", "/images/sample_chef.jpg"];

  return (
    <div>
      <Header />
      <div className="mb-12 mt-5 flex flex-col gap-8">
        <div>
          <div className={TitleClass}>レシピ名</div>
          <input
            className="w-full border-y border-lightGray py-3 pl-5 outline-none"
            type="text"
            placeholder="例：肉じゃが"
          />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <div className={TitleClass}>材料 / 2人前</div>
            <Edit />
          </div>
          <div className="border-y border-lightGray">
            {/* TODO compoent化 */}
            <div className="border-b border-lightGray px-4 py-3 last-of-type:border-none">
              <div>キャベツ</div>
              <p className="text-small text-gray">5〜6枚</p>
            </div>
            <div className="border-b border-lightGray px-4 py-3 last-of-type:border-none">
              <div>キャベツ</div>
              <p className="text-small text-gray">5〜6枚</p>
            </div>
          </div>
          {/* TODO component化 */}
          <div className="ml-4 mt-2 flex items-center gap-1">
            <Plus />
            <p className="text-tomato">材料を追加する</p>
          </div>
        </div>
        <div>
          <div className={TitleClass}>作り方</div>
          <div className="border-y border-lightGray">
            <div className="flex gap-2 border-b border-lightGray px-4 py-2 last-of-type:border-none">
              <div className="h-5 w-5 shrink-0 rounded-full bg-tomato text-center leading-5">
                <span className=" text-white">1</span>
              </div>
              <div>
                <div>
                  用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。
                </div>
                <p className="text-small text-gray">
                  ※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。
                </p>
              </div>
            </div>
            <div className="flex gap-2 border-b border-lightGray px-4 py-2 last-of-type:border-none">
              <div className="h-5 w-5 shrink-0 rounded-full bg-tomato text-center leading-5">
                <span className=" text-white">2</span>
              </div>
              <div>
                <div>
                  用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。
                </div>
                <p className="text-small text-gray">
                  ※椎茸はなしでも作れますし、しめじやマッシュルームなどでも。きのこ系が入っていた方が食感と香りがよいので、ぜひ入れて作ってみてください。鶏肉等の代用については下記補足に。
                </p>
              </div>
            </div>
          </div>
          <div className="ml-4 mt-2 flex items-center gap-1">
            <Plus />
            <p className="text-tomato">工程を追加する</p>
          </div>
        </div>
        <div>
          <div className={TitleClass}>画像</div>
          <ImageCarousel>
            {imageData.map((src, i) => (
              <ImageComponent src={src} key={i} alt="" width="small" ratio="1/1" />
            ))}
          </ImageCarousel>
          <div className="ml-4 mt-2 flex items-center gap-1">
            <Plus />
            <p className="text-tomato">画像を追加する</p>
          </div>
        </div>
        <div>
          <div className={TitleClass}>リンク</div>
          <input className="w-full border-y border-lightGray py-3 pl-5 outline-none" type="text" />
          <div className="ml-4 mt-2 flex items-center gap-1">
            <Plus />
            <p className="text-tomato">リンクを追加する</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
