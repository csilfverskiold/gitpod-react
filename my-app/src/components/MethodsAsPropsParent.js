// Methods as props in React

import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    // Method to Sign in
    handleSignIn = () => {
        this.setState({
            isLoggedIn: true,
        });
        console.log(this);
    }

    // Method to Sign out
    handleSignOut = () => {
        this.setState({
            isLoggedIn: false,
        });
        console.log(this);
    }

    render() {
        return (
            <div>
                <MethodsAsPropsChild
                    isLoggedIn={this.state.isLoggedIn}
                    handleSignIn={this.handleSignIn}
                    handleSignOut={this.handleSignOut}
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent