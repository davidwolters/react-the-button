import navStyles from './NavigationBar.module.css'
import Link from 'next/link'

/**
 * The navigation bar at the top of each page.
 * @param pages
 * @param selected
 * @returns {*}
 * @constructor
 */
const NavigationBar = ({ pages, selected }) => {
	return (

		<div className={navStyles.container}>
			{pages.map(({ title, URL }) => (

				<Link key={URL} href={URL}>
					<a>
						<h2 className={
							navStyles.navItem +
							(URL === selected
								? ' ' + navStyles.navItemSelected
								: '')
						}>{title}</h2>
					</a>
				</Link>

			))}
		</div>
	)
}

export default NavigationBar