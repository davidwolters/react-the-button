/**
 * Wrapper for the app.
 */

import '../styles/globals.css'
import NavigationContext, { pages } from '../state/NavigationContext'
import React from 'react'

const MyApp = ({ Component, pageProps }) => {
	// The only global state is the pages context, which provides each page with the navigation for all the other pages.
	return (
		<NavigationContext.Provider value={pages}>
			<Component {...pageProps} />
		</NavigationContext.Provider>
	)
}

MyApp.getInitialProps = async (appContext) => {
	let pageProps = {}
	if (appContext.Component.getInitialProps) {
		pageProps = await appContext.Component.getInitialProps(appContext.ctx)
	}
	return { ...pageProps }
}

export default MyApp
