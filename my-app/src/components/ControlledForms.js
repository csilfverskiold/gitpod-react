// Controlled vs Uncontrolled components in React
// Showcasing a Controlled component

import React, { Component } from 'react'

export class ControlledForms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: ''
      }
    }
  render() {
    return (
      <div>
        <form>
            <label htmlFor="id-name">Your name: </label>
            <input value={this.state.name} id="id-name" name="name" type="text" />
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ControlledForms

// "Here you’ve learned the difference  between controlled and uncontrolled components, as they relate 
// to forms in React. Uncontrolled forms have their inputs and functionality managed by the DOM, while 
// controlled forms have their inputs and functionality managed by React."

// "You learned the first part of how to give  control of your form components to React  
// by adding a property to the state and setting the  value of the input equal to that state property.  
// This causes a problem though, because  now that React is controlling the form,  
// the input doesn’t seem to work anymore."