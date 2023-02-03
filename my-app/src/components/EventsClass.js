// Handling events in React

import React, { Component } from 'react'

export class EventsClass extends Component {

    clickHandler(){
        console.log("Clicked the class button")
    }

    mouseHandler(){
        console.log("Moused over the class button")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>click me - class component</button>
                <button onMouseOver={this.mouseHandler}>mouse over me - class component</button>
            </div>
        )
    }
}

export default EventsClass

// "Defining an event handler in a  class component is nearly identical to doing so  
// in a functional component. In a class component,  we define the handler as a method on the class,  
// so we don't need the function keyword. So here  outside the render method we can just create a  
// method called clickHandler(), and inside it log  ""Clicked the class button"". The other difference  
// is that when passing the handler to the onClick  attribute, we need to use the this keyword."