/**
 * Page for adding an entry to the guest book.
 */

import NavigationBar from '../../components/NavigationBar'
import NavigationContext from '../../state/NavigationContext'
import React, { useContext, useRef, useState } from 'react'
import Content from '../../components/Content'
import styles from '../../styles/form-styles.module.css';
import { sendRequest } from '../../api/client'
import Link from 'next/link'

const AddEntry = () => {

	const navigation = useContext(NavigationContext)

	// Refs for the form inputs.
	const userInput = useRef(null)
	const contentInput = useRef(null)

	// Used for the status alert at the end.
	const [status, setStatus] = useState(null);

	// When the form is submitted, send a request to the server to add the entry.
	const onFormSubmit = e => {
		e.preventDefault();
		sendRequest( {action: 'add-entry', user: userInput.current.value, content: contentInput.current.value}, data => {
			if ( data.status === 'success' ) {
				userInput.current.value = ""
				contentInput.current.value = ""

			}
			setStatus( data.status )
		} )
	}

	return (
		<>
			<NavigationBar pages={navigation.pages} selected={'/guest-book'} />
			<Content>
				<h1 className="page-title">Add Entry</h1>
				<div className={"center"}>
					<form className="restrict-width">
						<input ref={userInput}  className={`${styles.input} ${styles.inputLg}`} type="text" placeholder="Your name" /> <br />
						<textarea ref={contentInput} className={`${styles.input} ${styles.textarea}`} placeholder="Write something nice">

						</textarea> <br />
						<button onClick={onFormSubmit} className={styles.button}>Submit</button>

						{status !== null ? (
							(status === 'success' ) ? (
								<h3 className={styles.alertSuccess}>Entry registered!</h3>
							) : (
								<h3 className={styles.alertError}>Something went wrong!</h3>
							)
						) : ''}
					</form>
					<Link href="/guest-book/1">
						<a>
							<h2>Browse Entries</h2>
						</a>
					</Link>
				</div>

			</Content>
		</>
	)
}


export default AddEntry;


