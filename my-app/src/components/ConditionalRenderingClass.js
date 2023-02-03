// Conditional rendering in React

import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true,

      }
    }
    render() {
        return (
            <div>
                <h1>{this.state.isLoaded ? "Data is loaded!" : "Loading..."}</h1>
                {this.state.isLoggedIn ? (
                    <p>Welcome to the site! Please complete the steps below:
                        <ol>
                            <li>Confirm your email</li>
                            <li>Complete your profile</li>
                            <li>Subscribe to the newsletter</li>
                        </ol>
                    </p>
                ) : 
                (<p>Please sign in</p>)}
            </div>
        )
    }
}

export default ConditionalRenderingClass

// "Conditional Rendering - Lets a React component to show different elements 
// based on wheter a certain condition is met."