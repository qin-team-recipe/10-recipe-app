import Sectiontitle from "../components/common/sectiontitle";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <form action="#" className={styles.form}>
        <label>
          <input
            type="text"
            placeholder="シェフやレシピを検索"
            className={styles.input}
          />
        </label>
        <button
          type="submit"
          aria-label="検索"
          className={styles.button}
        ></button>
      </form>
      <div className="section">
        <Sectiontitle title="注目のシェフ" />
        <div className={styles.wrapper_scroll}>
          <div className={styles.horizon_list}>
            <div className={styles.featuredchef_container}>
              <Image
                src="/images/sample_chef.jpg"
                width={148}
                height={220}
                alt=""
              />
              <p>山田シェフ</p>
            </div>
            <div className={styles.featuredchef_container}>
              <Image
                src="/images/sample_chef.jpg"
                width={148}
                height={220}
                alt=""
              />
              <p>山田シェフ</p>
            </div>
            <div className={styles.featuredchef_container}>
              <Image
                src="/images/sample_chef.jpg"
                width={148}
                height={220}
                alt=""
              />
              <p>山田シェフ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <Sectiontitle title="話題のレシピ" />
        <div className={styles.wrapper_scroll}>
          <div className={styles.horizon_list}>
            <div className={styles.recipe_container}>
              <Image
                src="/images/sample_recipe.jpg"
                width={160}
                height={160}
                alt=""
              />
              <p>
                トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン
              </p>
            </div>
            <div className={styles.recipe_container}>
              <Image
                src="/images/sample_recipe.jpg"
                width={160}
                height={160}
                alt=""
              />
              <p>
                トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン
              </p>
            </div>
            <div className={styles.recipe_container}>
              <Image
                src="/images/sample_recipe.jpg"
                width={160}
                height={160}
                alt=""
              />
              <p>
                トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <Sectiontitle title="シェフ" url="#" linktext="もっと見る" />
        <div className={styles.vertical_list}>
          <div className={styles.chef_container}>
            <Image
              src="/images/sample_chef2.jpg"
              width={88}
              height={116}
              alt=""
            />
            <div className={styles.chef_description}>
              <p>ひふみシェフ</p>
              <p>
                白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。
              </p>
              <p>123レシピ</p>
            </div>
          </div>
          <div className={styles.chef_container}>
            <Image
              src="/images/sample_chef2.jpg"
              width={88}
              height={116}
              alt=""
            />
            <div className={styles.chef_description}>
              <p>ひふみシェフ</p>
              <p>
                白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。
              </p>
              <p>123レシピ</p>
            </div>
          </div>
          <div className={styles.chef_container}>
            <Image
              src="/images/sample_chef2.jpg"
              width={88}
              height={116}
              alt=""
            />
            <div className={styles.chef_description}>
              <p>ひふみシェフ</p>
              <p>
                白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。
              </p>
              <p>123レシピ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
