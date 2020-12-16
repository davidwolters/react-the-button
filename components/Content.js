

import styles from './Content.module.css';

/**
 * Wrapper for page content.
 * @param children	child components.
 * @returns {*}
 * @constructor
 */
const Content = ({children}) => {
	return (
		<section className={styles.container}>
			{children}
		</section>
	)
}


export default Content;