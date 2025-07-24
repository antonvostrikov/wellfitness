import styles from '@/app/styles/landingIdeas.module.scss'
import Container from './container'

export default function LandingIdeas() {
  return (
    <section className={styles.sectionIdeas}>
      <Container>
        <h2>Идеи и подборки</h2>
        <div className={styles.gridContainer}>
          <div className={styles.idea} id={styles.ideaLeft}>
            <h3>Лучшие тренажеры для <b>жиросжигания</b></h3>
            <div className={styles.timer}>
              <img src="/LandingIdeas/timer.png" alt="timer" />
              <p>Тренировка<br/> всего<br/> <b>14 минут</b></p>
            </div>
            <div className={styles.banner}>
              <img src="/LandingIdeas/bannerMax.png" alt="Banner" />
            </div>
          </div>
          <div className={styles.idea} id={styles.ideaMiddle}>
            <p>Кардио-силовая тренировка <br/><b>2 в 1</b></p>
          </div>
          <div className={styles.idea} id={styles.ideaRight}>
            <p><b>Беговая<br /> дорожка</b><br /> для подготовки к марафону</p>
            <img src="/LandingIdeas/nautilus.png" alt="brand" />
          </div>
          <button>Полная подборка</button>
        </div>
      </Container>
    </section>
  )
}
