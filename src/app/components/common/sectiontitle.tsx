import styles from "./sectiontitle.module.scss";
import Link from "next/link";

export default function sectiontitle({ title, url = "", linktext = "" }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      {url !== "" && (
        <Link href={url} className={styles.link}>
          {linktext}
        </Link>
      )}
    </div>
  );
}
