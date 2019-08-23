import React, { Component } from 'react'
import MyContext from './Context'

class MyProvider extends Component {

	state = {
		count: 0
	}

	render() {

		return(
			<MyContext.Provider
				value={{
					state: this.state,
					increaseCount: () => {
						this.setState({
							count: this.state.count+1
						})
					},
					decreaseCount: () => {
						this.setState({
							count: this.state.count === 0 ? 0 : this.state.count-1
						})
					}
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		)
	}
}

export default MyProvider
