import styles from './Badge.module.css'

/**
 * Badge component.
 * @param level	The level of the badge.
 * @returns {*}
 * @constructor
 */
const Badge = ({ level }) => {

	// List of level classes.
	const levelClasses = [
		styles.badgeLevel1,
		styles.badgeLevel2,
		styles.badgeLevel3,
		styles.badgeLevel4,
		styles.badgeLevel5,
		styles.badgeLevel6,
		styles.badgeLevel7,
		styles.badgeLevel8,
		styles.badgeLevel9]

	// Some colors are lighter, so we need dark text for them.
	let textColor = styles.lightText
	switch (level) {
		case 1:
		case 2:
			textColor = styles.darkText
			break
	}

	return (
		<div className={styles.container}>
			<div className={`${styles.badge} ${levelClasses[level - 1]}`}>
				<h2 className={`${textColor} ${styles.badgeText}`}>Level {level}</h2>
			</div>
		</div>
	)
}

export default Badge