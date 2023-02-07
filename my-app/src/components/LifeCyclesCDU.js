// Component Life Cycles in React
// Showcasing componenDidMount

import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log("constructor called")
        super(props)

        this.state = {
            greeting: "Hello"
        }
    }

    // This method will toggle "Hello" and "Goodbye" when clicked
    updateGreeting = () => {
        console.log("update greeting called")
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === "Hello" ? "Goodbye" : "Hello"
            }
        })
    }

    componentDidUpdate() {
        console.log("Component did update")
    }

    render() {
        console.log("render method called")
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
                <LifeCyclesCDUChild parentGreeting={this.state.greeting} />
            </div>
        )
    }
}

export default LifeCyclesCDU

// "Here we’ve covered the finer details of the componentDidUpdate lifecycle method. The key things 
// to remember are: first: the componentDidUpdate method is called every  time the component updates, whether 
// the update was caused by a change in props, a change  in state, or a parent component rerendering.  
// Second, a child updating will not cause a  parent to rerender, but a parent updating will cause its children 
// to rerender. Third, if you need to run the componentDidUpdate code under specific conditions related to the 
// previous props or state of the component, you can access prevProps and prevState by passing them into the 
// method as parameters."