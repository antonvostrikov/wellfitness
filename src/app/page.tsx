import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import LandingHome from "./components/landingHome";
import LandingClub from "./components/landingClub";
import LandingIdeas from "./components/landingIdeas";
import LandingBrands from "./components/landingBrands";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <LandingHome />
      <LandingClub />
      <LandingIdeas />
      <LandingBrands />
    </div>
  );
}
