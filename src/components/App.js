/** @jsx jsx */
import React, { Component } from 'react'
import { jsx, css } from '@emotion/core'

import MyProvider from '../context/Provider'
import Counter from './Counter'

class App extends Component {

	render() {
		return (
			<MyProvider>
				<div
					className="wp-reactjs-plugin"
					css={css`
						background: #f7f7f7;
						font-family: inherit;
						padding: 2rem 2rem 0.5rem;
						border-radius: 3px;
						box-model: border-box;
						margin-bottom: 1.5rem;
					`}
				>
					<h2
						css={css`
							margin: 0 0 1.5rem;
						`}
					>Your ReactJS App inside WordPress</h2>
					<p>This plugin framework bundles CSS with <a href="https://emotion.sh">Emotions</a>, JS with <a href="https://reactjs.org/">React</a>, and relies on React Context for state management. Webpack and Bable configurations work out of the box.</p>
					<p>Read the Documentation at the Github Repo.</p>
					<Counter />
				</div>
			</MyProvider>
		)
	}
}

export default App
