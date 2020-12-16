import styles from './GuestBookEntry.module.css';

/**
 * An entry in the guest book.
 * @param user		The user of the entry	.
 * @param content	The entry content.
 * @returns {*}
 * @constructor
 */
const GuestBookEntry = ({user, content}) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Entry by <span className={styles.name}> {user}</span></h2>
			<p className={styles.content} >{content}</p>
		</div>
	)
}

export default GuestBookEntry;