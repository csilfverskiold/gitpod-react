// Handling events in React

import React from 'react'

function EventsFunctional() {

    function clickHandler(){
        console.log("Clicked the functional button")
    }

    function doubleClickHandler(){
        console.log("Double clicked the functional button")
    }

    return (
        <div>
            <button onClick={clickHandler}>click me - functional component</button>
            <button onDoubleClick={doubleClickHandler}>double click me - functional component</button>
        </div>
    )
}

export default EventsFunctional

// "All events in react are passed to their elementsas JSX attributes such as onClick here, and their 
// values will be specified in curly braces. So here I'll open a set of curly braces and within them 
// I'll pass a function called clickHandler. This is the function that will be called 
// when the button is clicked. So now, all we need to do is define the function. 
// Function clickhandler, and inside it, console.log, Clicked the functional button.
// There are a few important things to note here. First, make sure that the onClick 
// attribute is camel cased. Second, ensure that the clickHandler function is inside the component, 
// not defined outside the EventsFunctional function. 
// Finally, make sure you do NOT use parentheses after the click handler when passing it. 
// We want to pass the function itself, not a call to the function, as the event handler."