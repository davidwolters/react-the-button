/**
 * Context for the page navigation.
 */

import React, { createContext } from 'react'

// Default state.
export const pages = {
	pages: [
		{
			title: 'Home',
			URL: '/',
		},
		{
			title: 'The Button',
			URL: '/button',
		},
		{
			title: 'About',
			URL: '/about',
		},
		{
			title: 'Guest Book',
			URL: '/guest-book',
		},
	],
}

// The context.
const NavigationContext = createContext(pages)

export default NavigationContext


