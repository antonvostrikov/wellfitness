import styles from '@/app/styles/landingIdeas.module.scss'
import Container from './container'

export default function LandingIdeas() {
  return (
    <section className={styles.sectionIdeas}>
      <Container>
        <h2>Идеи и подборки</h2>
        <div className={styles.gridContainer}>
          <div className={styles.idea} id={styles.ideaLeft}>
            <h3>Лучшие тренажеры для жиросжигания</h3>
            <div className={styles.timer}>
              <img src="/LandingIdeas/timer.png" alt="timer" />
              <span></span>
            </div>
          </div>
          <div className={styles.idea} id={styles.ideaMiddle}>2</div>
          <div className={styles.idea} id={styles.ideaRight}>3</div>
        </div>
      </Container>
    </section>
  )
}
