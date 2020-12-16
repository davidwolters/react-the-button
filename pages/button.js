/**
 * Button page, where the game is played.
 */

import NavigationBar from '../components/NavigationBar'
import Content from '../components/Content'
import ButtonSlider from '../components/ButtonSlider'
import TheButton from '../components/TheButton'
import NavigationContext from '../state/NavigationContext'
import { useEffect, useContext, useState } from 'react'
import { sendRequest, sendRequestAsync } from '../api/client'
import Badge from '../components/Badge'


const ButtonPage = ({totalTime}) => {
	const navigation = useContext(NavigationContext);

	// When we click on the button, we get a badge displaying our level.
	const [badge, setBadge] = useState(null);

	// Used for the counter.
	const [currentTime, setTime] = useState(null);

	// Updates the time from the server.
	const getNewTime = async () => {
		return await sendRequestAsync({action: 'get-time'});
	}

	// Update the timer every three seconds, to not overload my tiny server : )
	useEffect( () => {
		const interval = setInterval( () => {
			getNewTime().then( res => {setTime(res.time);console.log(res.time)});
		}, 3000 );

		return () => {
			clearInterval(interval);
		}

	}, [] )



	// When the button is pressed, send request to reset time, and when that is recieved, reset time and give the user a badge.
	const buttonPressed = () => {
		sendRequest( {action: 'reset-time'}, (data) => {
			console.log(data);
			setBadge(data.level);
			setTime(0);
		} );
	}

	let badgeDisplay = ''
	if ( badge !== null ) {
		badgeDisplay = <Badge level={badge} />
	}


	return (
		<>
			<NavigationBar pages={navigation.pages} selected="/button"/>
			<Content>
				<h1 className="page-title">The Button</h1>
				<ButtonSlider currentTime={currentTime} totalTime={totalTime} />
				<TheButton onClick={buttonPressed}/>
				{badgeDisplay}
			</Content>
		</>
	)
}

/**
 * This is used to get the total time of the button.
 * @returns {Promise<{notFound: boolean}|{props: {totalTime: *}}>}
 */
export const getStaticProps = async () => {
	const res = await sendRequestAsync( {action: 'get-time'} );
	if ( !res ) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			totalTime: res.totalTime
		}
	}
}



export default ButtonPage