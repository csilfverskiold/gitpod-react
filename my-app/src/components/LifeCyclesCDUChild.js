// Component Life Cycles in React
// Showcasing componenDidMount

import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {
    constructor(props) {
        console.log('Child Constructor called');
        super(props)

        this.state = {
            greeting: 'Child Hello!',
        }
    }

    updateGreeting = () => {
        console.log('Child updateGreeting called');
        this.setState((prevState) => {
            return {
                greeting: prevState.greeting === 'Child Hello!' ? 'Child Goodbye' : 'Child Hello!',
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Child Component updated!');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.parentGreeting !== this.props.parentGreeting) {
            console.log('Parent greeting has changed!');
        }
    }

    render() {
        console.log('Child Render method called');
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Child Greeting</button>
            </div>
        )
    }
}

export default LifeCyclesCDUChild

// "Here we’ve covered the finer details of the componentDidUpdate lifecycle method. The key things 
// to remember are: first: the componentDidUpdate method is called every  time the component updates, whether 
// the update was caused by a change in props, a change  in state, or a parent component rerendering.  
// Second, a child updating will not cause a  parent to rerender, but a parent updating will cause its children 
// to rerender. Third, if you need to run the componentDidUpdate code under specific conditions related to the 
// previous props or state of the component, you can access prevProps and prevState by passing them into the 
// method as parameters."