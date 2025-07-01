import styles from '../styles/landingClub.module.scss'
import Container from './container'

export default function LandingClub() {
  return (
    <section className={styles.sectionClub}>
      <Container className={styles.containerClub}>
        <h2>Для фитнес клубов</h2>
        <div className={styles.gridContainer}>
          <div id={styles.gridA} className={styles.grid}>
            <span className={styles.gridTitle} id={styles.main}>Профессиональные кардиотренажеры</span>
          </div>
          <div id={styles.gridB} className={styles.grid}>
            <span className={styles.gridTitle}>Грузоблочные тренажеры</span>
          </div>
          <div id={styles.gridC} className={styles.grid}>
            <span className={styles.gridTitle}>Тренажеры на свободных весах</span>
          </div>
          <div id={styles.gridD} className={styles.grid}>
            <span className={styles.gridTitle}>Функциональный тренинг</span>
          </div>
          <div id={styles.gridE} className={styles.grid}>
            <span className={styles.gridTitle}>Wellness, СПА, Массаж</span>
          </div>
          <div id={styles.gridF} className={styles.grid}>
            <span className={styles.gridTitle}>Спортивная медицина и реабилитация</span>
          </div>
          <div id={styles.gridG} className={styles.grid}>
            <span className={styles.gridTitle}>Свободные веса</span>
          </div>
        </div>
        <button>Все категории</button>
      </Container>
    </section>
  )
}

