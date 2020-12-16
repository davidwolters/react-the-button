/**
 * An about page.
 */

import NavigationBar from '../components/NavigationBar'
import NavigationContext from '../state/NavigationContext'
import React, { useContext } from 'react'
import Content from '../components/Content'
import BadgeCategory from '../components/BadgeCategory'
import { sendRequest, sendRequestAsync } from '../api/client'

const About = ({ colors, totalTime }) => {


	// Display about information, and list all the levels available.
	const navigation = useContext(NavigationContext)
	return (
		<>
			<NavigationBar pages={navigation.pages} selected="/about"/>
			<Content>
				<h1 className="page-title">About The Button</h1>
				<div className="center">
					<h3 className="restrict-width">The Button is a game where a
						timer will count down
						from {parseInt(totalTime / 3600)} hours. When someone
						clicks
						the button, the timer resets, and they earn a badge
						depending on how close to death the button is. If the
						button
						dies, it is forever dead.</h3>
				</div>
				{Object.keys(colors).map(key => (
						<BadgeCategory key={key} color={key}
									   description={colors[key]}/>
					),
				)}
			</Content>
		</>
	)
}

/**
 * Used for getting which levels are available and their corresponding color.
 * @param context
 * @returns {Promise<{notFound: boolean}|{props: {totalTime, colors: *}}>}
 */
export const getStaticProps = async (context) => {
	const colors = await sendRequestAsync({ action: 'get-colors' })
	const time = await sendRequestAsync({ action: 'get-time' })

	if (!colors || !time) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			colors: colors,
			totalTime: time.totalTime,
		},
	}
}
export default About