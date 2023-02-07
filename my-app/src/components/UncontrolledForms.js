// Controlled vs Uncontrolled components in React
// Showcasing a Uncontrolled component

import React, { Component } from 'react'

export class UncontrolledForms extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComments = React.createRef();
        // "With this ^ reference ^, React can access the value  of the name input at any time, but the DOM can  
        // still manage its value, eliminating the need to  write event handlers and deal with state updates.  
        // In fact, this ref just gives React access  to the literal DOM element itself. If you  
        // log this.inputName.current to the console  and submit the form, you’ll see it logs  
        // the input element itself. This is really useful  because it proves you can actually use refs on  
        // any element throughout the DOM and access their  individual attributes and properties as needed.
        // Here, for example, we could access current.name,  
        // current.type or current.id among the many  other built-in attributes an HTML element has."
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComments.current.value)
    }


    render() {
        return (
            <div>
                <h2>Please fill out the form below: </h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your name: </label>
                        <input id="id-name" name="name" type="text" ref={this.inputName} />
                    </div>

                    <div>
                    <label htmlFor="id-category">Query category: </label>
                        <select id="id-category" name="category" ref={this.inputCategory}>
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments: </label>
                        <textarea id="id-comments" name="comments" ref={this.inputComments} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UncontrolledForms

// "So, like functional and class-based components,  there is always going to be some debate  
// on when, where and why you should use  controlled vs uncontrolled forms in React.  
// And like the stateless vs  stateful component debate,  
// the answer to when you should use each depends  greatly on your situation and preferences.  
// For example, uncontrolled forms, while less  featureful, are significantly easier to implement.
// Controlled forms on the other hand, can  do things like real time validation as you type,  
// and conditionally enabling and disabling the  submit button, since with a controlled component  
// you have full control over its functionality right  down to the onChange event for each input element.
// In general, React documentation recommends that  you use controlled components wherever you can  
// even though they’re harder to implement,  because in the end they are more useful and featureful.
// If you just need to throw  together a quick and dirty form though,  
// and don’t feel like worrying  about state and event handlers,  
// uncontrolled components will get the job  done."