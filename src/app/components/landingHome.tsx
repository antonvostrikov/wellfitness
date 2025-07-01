import styles from '../styles/landingHome.module.scss'
import Container from './container'
import Image from 'next/image'

export default function LandingHome() {
  return (
    <section className={styles.sectionHome}>
      <Container className={styles.containerHome}>
        <h2>Тренажеры для дома</h2>
        <div className={styles.gridContainer}>
          <div id={styles.gridA} className={styles.grid}>
            <span className={styles.gridTitle} id={styles.main}>Беговые дорожки</span>
          </div>
          <div id={styles.gridB} className={styles.grid}>
            <span className={styles.gridTitle}>Эллиптические тренажеры</span>
          </div>
          <div id={styles.gridC} className={styles.grid}>
            <span className={styles.gridTitle}>Велотренажеры</span>
          </div>
          <div id={styles.gridD} className={styles.grid}>
            <span className={styles.gridTitle}>Горнолыжные тренажеры</span>
          </div>
          <div id={styles.gridE} className={styles.grid}>
            <span className={styles.gridTitle}>Силовые тренажеры</span>
          </div>
          <div id={styles.gridF} className={styles.grid}>
            <span className={styles.gridTitle}>Гребные тренажеры</span>
          </div>
          <div id={styles.gridG} className={styles.grid}>
            <span className={styles.gridTitle}>Батуты</span>
          </div>
          <div id={styles.gridH} className={styles.grid}>
            <span className={styles.gridTitle}>Игровые столы</span>
          </div>
          <div id={styles.gridI} className={styles.grid}>
            <span className={styles.gridTitle}>Массажные кресла</span>
          </div>
          <div id={styles.gridJ} className={styles.grid}>
            <span className={styles.gridTitle}>Фитнес аксессуары</span>
          </div>
        </div>
        <button>Все категории</button>
      </Container>
    </section>
  )
}