import styles from '@/app/styles/landingBrands.module.scss'
import Container from './container'

export default function PopularBrands() {
	return (
		<section className={styles.brands}>
			<Container>
				<h2>Популярные бренды</h2>
				<div className={styles.gridContainer}>

				</div>
				<button></button>
			</Container>
		</section>
	)
}