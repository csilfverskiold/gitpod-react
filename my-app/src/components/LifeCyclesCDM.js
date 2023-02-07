// Component Life Cycles in React
// Showcasing componenDidMount

import React, { Component } from 'react'
import LifeCyclesCDMChild from '../components/LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {
  constructor(props) {
    console.log("constructor called")
    super(props)

    this.state = {
      data: "loading"
    }
  }

  getData() {
    console.log("getData() called")
    setTimeout(() => {
      console.log("Data fetched!")
        this.setState({
            data: 'loaded'
        })
    }, 3000)
}
componentDidMount() {
  console.log("component mounted")
    this.getData()
}

  render() {
    console.log("render method called")
    return (
      <div>
        <h1>{this.state.data}</h1>
        <LifeCyclesCDMChild />
      </div>
    )
  }
}

export default LifeCyclesCDM

// Component Life Cycles in React:
// "In React components there are three primary  processes: MOUNTING, UPDATING and UNMOUNTING. 
// Mounting refers to when the component is  initially placed into the DOM. Updating refers to when 
// something has changed, such as props or  state, and the component needs to be rerendered. 
// Unmounting refers to when the  component is removed from the DOM. Components are constantly mounting, 
// updating and unmounting as users use your application, and this process of mounting, updating and unmounting 
// is referred to as each component's lifecycle."