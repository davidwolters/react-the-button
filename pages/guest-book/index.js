/**
 * Main page for the guest book, with links to browse and add entries.
 */

import NavigationContext from '../../state/NavigationContext'
import NavigationBar from '../../components/NavigationBar'
import Content from '../../components/Content'
import { useContext } from 'react'
import Link from 'next/link'



const GuestBook = () => {

	const navigation = useContext(NavigationContext)
	return (
		<>
			<NavigationBar pages={navigation.pages} selected={"/guest-book"} />
			<Content>
				<h1 className="page-title">Guest Book</h1>
				<h3>Feel free to take a look, or add a page to the guest book!</h3>
				<Link href="/guest-book/1">
					<a>
						<h2>Start Browsing</h2>
					</a>
				</Link>
				<Link href="/guest-book/add-entry">
					<a>
						<h2>Add Entry</h2>
					</a>
				</Link>
			</Content>
		</>
	)
}


export default GuestBook