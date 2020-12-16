import renderer from 'react-test-renderer'
import Badge from '../components/Badge'
import { unmountComponentAtNode } from 'react-dom'
import React from 'react'
import Content from '../components/Content'
import GuestBookNav from '../components/GuestBookNav'
import ButtonSlider from '../components/ButtonSlider'
import GuestBookEntry from '../components/GuestBookEntry'

jest.mock("next/link", () => {
	return ({children}) => {
		return children;
	}
});

let container = null
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div')
	document.body.appendChild(container)
})

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container)
	container.remove()
	container = null
})

describe('App Components', () => {
	it('renders correctly', () => {
		const badge = renderer.create(<Badge level={3}/>)
		expect(badge.toJSON().children[0].children[0].children[0]).
			toContain('Level')
	})

	it('Renders child components', () => {
		const content = renderer.create(<Content>
			<div>test</div>
		</Content>)
		expect(content.toJSON().children[0].children[0]).toBe('test')
	})

	it('Renders Correct Guest book Nav', () => {
		const guestBook = renderer.create(<GuestBookNav entries={10}
														current={5}/>)
		expect(guestBook.toJSON().children[1].children[0]).toBe('3')
	})

	it('Renders the buttonslider at the correct width', () => {
		const buttonSlider = renderer.create(<ButtonSlider currentTime={50}
														   totalTime={100}/>)
		expect(buttonSlider.toJSON().children[0].children[0].props.style.width).toBe("50%")
	})

	it( "renders guest book entries correctly", () => {
		const entry = renderer.create(<GuestBookEntry user={"testuser"} content={"testcontent"}/>)
		expect(entry.toJSON().children[1].children[0]).toBe("testcontent")
	})

})
