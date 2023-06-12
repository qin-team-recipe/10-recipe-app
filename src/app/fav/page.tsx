import Sectiontitle from '../../components/common/sectiontitle';
import styles from './styles.module.scss';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <p className={styles.title}>お気に入り</p>
      <div className='section'>
        <Sectiontitle title='シェフ' />
        <div className={styles.horizon_list}>
          <div>
            <Image
              src='/images/sample_smallchef.jpg'
              width={68}
              height={68}
              alt=''
            />
            <p>山田シェフ</p>
          </div>
          <div>
            <Image
              src='/images/sample_smallchef.jpg'
              width={68}
              height={68}
              alt=''
            />
            <p>山田シェフ</p>
          </div>
          <div>
            <Image
              src='/images/sample_smallchef.jpg'
              width={68}
              height={68}
              alt=''
            />
            <p>山田シェフ</p>
          </div>
          <div>
            <Image
              src='/images/sample_smallchef.jpg'
              width={68}
              height={68}
              alt=''
            />
            <p>山田シェフ</p>
          </div>
          <div>
            <Image
              src='/images/sample_smallchef.jpg'
              width={68}
              height={68}
              alt=''
            />
            <p>山田シェフ</p>
          </div>
        </div>
      </div>
      <div className='section'>
        <Sectiontitle title='レシピ' url='/new-recipes' linktext='新着レシピ' />
        <div className={styles.card_list}>
          <div>
            <Image
              src='/images/sample_recipe2.jpg'
              width={194}
              height={194}
              alt=''
            />
            <p>
              トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン
            </p>
            <p>ウルトラハイパー超すごいしまぶーシェフ</p>
          </div>
          <div>
            <Image
              src='/images/sample_recipe2.jpg'
              width={194}
              height={194}
              alt=''
            />
            <p>
              トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン
            </p>
            <p>ウルトラハイパー超すごいしまぶーシェフ</p>
          </div>
        </div>
      </div>
      <Sectiontitle title='マイレシピ' url='/fav/my' linktext='新着レシピ' />
    </>
  );
}
