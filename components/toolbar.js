import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";
import Image from "next/image";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")} className={styles.logo_container}>
        <Image
          src="/images/logo.png"
          alt="Picture of the author"
          layout="fill"
        />
      </div>
      <h1>Cervest - Storyblok CMS guide</h1>
      {/* <div onClick={() => (window.location.href = "https://github.com/aliamk")}>
        Twitter
      </div>
      <div onClick={() => (window.location.href = "https://github.com/aliamk")}>
        GitHub
      </div> */}
    </div>
  );
};
