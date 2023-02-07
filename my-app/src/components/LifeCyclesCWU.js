// Component Life Cycles in React
// Showcasing componenWillUnmount

import React, { Component } from 'react'
import LifeCyclesCWUTracker from './LifeCyclesCWUTracker'

export class LifeCyclesCWU extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: true
        }
    }

    toggleDisplay = () => {
        this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    render() {
        return (
            <div>
                {this.state.visible && <LifeCyclesCWUTracker />}
                <button onClick={this.toggleDisplay}>Toggle Display</button>
            </div>
        )
    }
}

export default LifeCyclesCWU

// "Anytime you need to do some cleanup stuff like removing event listeners, resetting intervals, 
// stopping timers or cancelling network requests, you should do it in componentWillUnmount."