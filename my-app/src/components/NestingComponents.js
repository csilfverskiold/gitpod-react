// Nesting components in React

import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

export class NestingComponents extends Component {
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
                <UserData isLoaded={this.state.isLoaded} />
                <UserMessage isLoggedIn={this.state.isLoggedIn}/>
            </div>
        )
    }
}

export default NestingComponents

// "Nested Components - React components should be:
// 1. Small
// 2. Simple
// 3. Isolated
// 4. Reusable
// 5. Focused"