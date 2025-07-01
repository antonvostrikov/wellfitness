import Container from "./container";
import styles from '../styles/menu.module.scss';
import { ChartNoAxesColumn, Grip, Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

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
        <nav>
          <ul>
            <li>
              <Link href="#">Бренды</Link>
            </li>
            <li>
              <Link href="#">Сервис</Link>
            </li>
            <li>
              <Link href="#">Услуги</Link>
            </li>
            <li>
              <Link href="#">Поддержка</Link>
            </li>
            <li>
              <Link href="#">О компании</Link>
            </li>
            <li>
              <Link href="#">Блог</Link>
            </li>
            <li>
              <Link href="#">Где купить</Link>
            </li>
            <li>
              <Link href="#">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.menuRight}>
        <Link href="#" className={styles.menuBtn}>
          <ChartNoAxesColumn />
        </Link>
        <Link href="#" className={styles.menuBtn}>
          <Heart />
        </Link>
        <Link href="#" className={styles.menuBtn}>
          <ShoppingCart />
        </Link>
      </div>
    </Container>
  )
}