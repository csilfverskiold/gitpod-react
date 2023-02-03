// Conditional rendering in React

import React from 'react'

function ConditionalRenderingFunctional(props) {
  return (
    <div>
        <h1>{props.connected ? "Connected" : "Not Connected"}</h1>
    </div>
  )
}

export default ConditionalRenderingFunctional

// "Conditional Rendering - Lets a React component to show different elements 
// based on wheter a certain condition is met."

// "In the curly braces, I'm going to specify props.connected, question mark, 'Connected',  
// colon, 'Not connected'. By now you should know that TERNARY (? :) conditionals are basically shorthand  
// if statements, so what this is really saying is if props.connected is true, render the  
// string connected inside this h1, otherwise, render not connected."