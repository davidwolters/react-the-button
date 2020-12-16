
import styles from './BadgeCategory.module.css';
import React from 'react'

/**
 * Badge Category description for about page.
 * @param color			The color for the badge (hex or css color)
 * @param description	Description of the level.
 * @returns {*}
 * @constructor
 */
const BadgeCategory = ({color, description}) => {
	return (
		<div className={styles.container}>
			<div className={styles.color} style={{backgroundColor: color}}></div>
			<h2 className={styles.title}>{description}</h2>
		</div>
	)
}

export default BadgeCategory;