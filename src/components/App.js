/** @jsx jsx */
import React, { Component } from 'react'
import { jsx, css } from '@emotion/core'

class App extends Component {

	render() {
		return (
			<div
				className="wp-reactjs-plugin"
				css={css`
					background: #f7f7f7;
					font-family: inherit;
					padding: 2rem;
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
				<p>This plugin framework bundles CSS with <a href="https://emotion.sh">Emotions</a>, JS with <a href="https://reactjs.org/">React</a>, and state with <a href="https://redux.js.org/">Redux.</a> Webpack and Bable configurations work out of the box.</p>
				<p css={css`
					margin-bottom: 0;
				`}>Read the Documentation at the Github Repo.</p>
			</div>
		)
	}
}

export default App
