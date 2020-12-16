import styles from './ButtonSlider.module.css'

/**
 * Slider countdown for the button.
 * @param currentTime
 * @param totalTime
 * @returns {*}
 * @constructor
 */
const ButtonSlider = ({ currentTime, totalTime }) => {

	// If we haven't recieved a time from the server, we should show that it's
	// loading.
	let loading = false
	if (currentTime === null) {
		currentTime = 0
		loading = true
	}

	// Get percentage level.
	const perc = 100 - Math.floor((parseFloat(currentTime / totalTime)) * 100)

	// Calculate corresponding badge level.
	const level = Math.max(1, 10 - Math.floor(perc / 9))

	// Levelclasses for slider color.
	const levelClasses = [
		styles.sliderLevel1,
		styles.sliderLevel2,
		styles.sliderLevel3,
		styles.sliderLevel4,
		styles.sliderLevel5,
		styles.sliderLevel6,
		styles.sliderLevel7,
		styles.sliderLevel8,
		styles.sliderLevel9]
	return (
		<section className={styles.container}>
			<div className={styles.sliderContainer}>
				<div className={`${styles.slider} ${levelClasses[level - 1]}`}
					 style={{ width: perc + '%' }}>
					<div className={styles.sliderText}>
						{loading ? 'Loading...' : ''}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ButtonSlider


