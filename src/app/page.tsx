import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import LandingHome from "./components/landingHome";
import LandingClub from "./components/landingClub";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <LandingHome />
      <LandingClub />
    </div>
  );
}
