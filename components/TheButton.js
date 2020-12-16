import styles from './TheButton.module.css'
import React from 'react'

/**
 * The actual button.
 * @param onClick	Passed down event callback for when the button is clicked.
 * @returns {*}
 * @constructor
 */
const TheButton = ({ onClick }) => {
	return (
		<div className={styles.container}>
			<button className={styles.button} onClick={onClick}>Click</button>
		</div>
	)
}

export default TheButton