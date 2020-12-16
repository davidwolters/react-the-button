import styles from './GuestBookNav.module.css'
import Link from 'next/link'

/**
 * Navigation for the guest book entries.
 * @param entries		Total number of entries.
 * @param current		Current entry
 * @returns {*}
 * @constructor
 */
const GuestBookNav = ({ entries, current }) => {

	// We should show 5 entries at a time (if there is 5 entries).
	const lastEntryShown = Math.min(entries,
		current + 2 + (Math.max(3 - current, 0)))
	const firstEntryShown = Math.max(
		current - 2 - (Math.max(2 - (lastEntryShown - current), 0)), 1)
	let shownEntries = [...Array(entries).keys()].slice(firstEntryShown - 1,
		lastEntryShown)
	return (
		<div className={styles.container}>
			<Link href={`/guest-book/1`}>
				<a className={(current === 1)
					? styles.linkCurrent
					: styles.link}>
					To Start
				</a>
			</Link>
			{shownEntries.map((i => (
				<Link key={i} href={`/guest-book/${i + 1}`}>
					<a className={(i + 1) === current
						? styles.linkCurrent
						: styles.link}>
						{i + 1}
					</a>
				</Link>
			)))}
			<Link href={`/guest-book/${entries}`}>
				<a className={(current === entries)
					? styles.linkCurrent
					: styles.link}>
					To End
				</a>
			</Link>
		</div>
	)
}

export default GuestBookNav