import { ChevronDown, CircleUserRound } from 'lucide-react'
import styles from '../styles/header.module.scss'
import Container from './container'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className="container headerContainer">
        <div className={styles.headerLeft}>
          <img src="/logo.svg" alt="" />
          <div className={styles.headerLocation}>
            <span>Москва <ChevronDown /></span>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.headerPartners}>
            <Link href="/">Для дилеров</Link>
            <button><Link href="/">Become a Partner</Link></button>
          </div>
          <div className={styles.headerContact}>
            <div>+7 (800) 000-00-00 <span>МСК <ChevronDown /></span></div>
            <span className={styles.call}>Заказать звонок</span>
          </div>
          <div className={styles.headerAuth}>
            <span>Войти <CircleUserRound /></span>
          </div>
        </div>
      </Container>
      <div className={styles.headerMiddle}>
        <Container className="container">

        </Container>
      </div>
    </header>
  )
}
