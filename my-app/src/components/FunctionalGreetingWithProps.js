// Stateless functional component in React

import React from "react";


// 1. Create functional component (as a regular function)
// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

// 1. Create functional component (as an arrow function)
// 5.1 Pass in greeting prop in function
const FunctionalGreetingWithProps = (props) => {
    console.log(props)
    return <h1>Hello, {props.name} I see you're {props.age} years old; {props.greeting}</h1>;
};

// 2. Export functional component
export default FunctionalGreetingWithProps; 