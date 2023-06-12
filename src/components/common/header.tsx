import styles from './header.module.scss';
import Link from 'next/link';

export default function header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='/' className={styles.logo}>
          ロゴ
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href='/' className={`${styles.link} ${styles.link_search}`}>
              さがす
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href='/fav'
              className={`${styles.link} ${styles.link_favorite}`}
            >
              お気に入り
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href='/list'
              className={`${styles.link} ${styles.link_shoppinglist}`}
            >
              買い物リスト
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
