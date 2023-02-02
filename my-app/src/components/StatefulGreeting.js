import React from "react";

// 1.0 Create class component (as a regular class)
// 1.1 Extend class component through React ("extends React.Component")
// 1.2 Define a render method and return 
// 1.2 Pass in greeting prop in class (don't forget "this"!)
class StatefulGreeting extends React.Component {
    render() {
        return <h1>Hello {this.props.name} {this.props.greeting}</h1>
    }
}

// 2. Export class component
export default StatefulGreeting;