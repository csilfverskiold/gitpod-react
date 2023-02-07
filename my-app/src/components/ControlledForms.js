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

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="id-name">Your name: </label>
                    <input value={this.state.name} onChange={this.handleNameChange} id="id-name" name="name" type="text" />
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

// "Further, you’ve learned how  to complete the creation of a form  
// with controlled input elements in React. Any other inputs you add to the form  
// can be controlled in the exact same way. All  you need to do to create a controlled component  
// is capture the onChange event from each form field you want React to control,  
// and make sure that it has a matching property in the state so you can set its value accordingly.
// Right now, the form fields in this form are controlled by React but the submission of the  
// form is still handled by the DOM, which means when the user submits it, the page refreshes  
// and the form data is lost. In the next lesson, we’ll add a couple more fields to this form  
// and learn how to give React control over submitting the form as well."