/**
 * Page displaying an entry in the guest book.
 */

import { sendRequestAsync } from '../../api/client'
import NavigationBar from '../../components/NavigationBar'
import NavigationContext from '../../state/NavigationContext'
import React, { useContext } from 'react'
import Content from '../../components/Content'
import GuestBookEntry from '../../components/GuestBookEntry'
import GuestBookNav from '../../components/GuestBookNav'
import Link from 'next/link'

/**
 *
 * @param id				The ID of the entry
 * @param user				The entry user
 * @param content			The entry content
 * @param totalEntries 		Total amount of entries, for navigation.
 */
const Entry = ({id, user, content, totalEntries}) => {
	const navigation = useContext(NavigationContext)
	return (
		<>
			<NavigationBar pages={navigation.pages} selected={"/guest-book"} />
			<Content>
				<h1 className="page-title">Entry {id} </h1>
				<GuestBookEntry user={user} content={content} />
				<Link href="/guest-book/add-entry">
					<a>
						<h2>Add Entry</h2>
					</a>
				</Link>
				<GuestBookNav entries={totalEntries} current={id} />

			</Content>
		</>
	)
}

/**
 * Retrieves a path for each entry.
 * @returns {Promise<{notFound: boolean}|{paths: {params: {id: string}}[], fallback: boolean}>}
 */
export const getStaticPaths = async () => {
	const entryCount = await sendRequestAsync( {action: 'get-entry-count'} );


	if ( !entryCount ) {
		return {
			notFound: true
		}
	}

	// Turn the number into an object consiting of entryCount.count number of keys mapped to parameters for that page.
	const pages = [...Array(entryCount.count).keys()].map( i => ({params: {id: (i+1) + ""}}) );
	return {
		paths: pages,
		fallback: false
	}
}

/**
 * Retrieves data from the current entry
 * @param params
 * @returns {Promise<{props: {id: number, totalEntries: number, user: PublicKeyCredentialUserEntity, content: *}}|{notFound: boolean}>}
 */
export const getStaticProps = async ({params}) => {

	const entry = await sendRequestAsync( {action: 'get-entry', entry: params.id} );
	const totalEntries = await sendRequestAsync({action: 'get-entry-count'});

	if ( !entry || !totalEntries ) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			user: entry.user,
			content: entry.content,
			id: parseInt(entry.id),
			totalEntries: parseInt(totalEntries.count)
		}
	}
}
export default Entry;