import styles from "./page.module.scss";
import Image from "next/image";
//images
import logo from "./../public/imgs/commcepta.png";
import mountain from "./../public/imgs/mountain.png";

export default function Home() {
  return (
    <main className={styles.page}>
      <Image className={styles.page_mountain} src={mountain} alt="logo" />
      <Image className={styles.page_logo} src={logo} alt="logo" />
    </main>
  );
}
