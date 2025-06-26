import Container from "./container";
import styles from '../styles/menu.module.scss';
import { Grip, Search } from "lucide-react";

export default function Menu() {
  return (
    <Container className={styles.menuContainer}>
      <div className={styles.menuLeft}>
        <div className={styles.catalog}>
          <button><Grip /> Каталог</button>
        </div>
        <div className={styles.search}>
          <button><Search /></button>
        </div>
      </div>
      <div className={styles.menuMiddle}>

      </div>
      <div className={styles.menuRight}>

      </div>
    </Container>
  )
}