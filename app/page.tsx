import styles from "./page.module.scss";
import Image from "next/image";
//images
import logo from "./../public/imgs/commcepta.png";

export default function Home() {
  return (
    <main className={styles.page}>
      <Image className={styles.page_logo} src={logo} alt="logo" />
    </main>
  );
}
