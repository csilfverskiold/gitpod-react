import React from "react";

// 1.0 Create class component (as a regular class)
// 1.1 Extend class component through React ("extends React.Component")
// 1.2 Define a render method and return 
// 1.2 Pass in greeting prop in class (don't forget "this"!)
//
// 1.3 Add state to a class component: First define the constructor,  
//     call super, then add the initial state object inside the constructor.
//     Add constructor, a special method that is always called when the class is first instantiated.
//     
// 1.4.0 Add event handler to class component, example: Add onClick attribute, define handleClick method in
//       class component, call setState method containing objects in handleClick method, 
//       add callback function "() => {" after setState method to render properly in console. 
//
// 1.4.1 Add ternary condition to event handler, to change from "Hello! / Exit" to "Goodbye! / Enter"
//       with === and ? :

// 1.4.2 Continue to add third rule of updating the state, follow supplied the "Updating the State - Cheat Sheet"
//       Original code repo: https://github.com/Code-Institute-Solutions/react-1-18-49/blob/4329ab8b6d1cc8270eac7a01ceb9856854f99dda/src/components/StatefulGreetingWithCallback.js
class StatefulGreeting extends React.Component {

    constructor(props) {         //Always add contstructor this way
        super(props);
        this.state = {      //State object, can have many properties
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
          console.log("Previous State:", prevState);
          console.log("Previous Props:", prevProps);
          return {
            introduction:
              prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
          };
        });
      }
    
      increment() {
        this.setState((prevState, prevProps) => {
          console.log("Previous State:", prevState);
          console.log("Previous Props:", prevProps);
          return {
            count: prevState.count + 1,
          };
        });
      }
    
      incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
      }
    
      render() {
        return (
          <div>
            <h1>
              {this.state.introduction} {this.props.greeting}
            </h1>
            <button onClick={() => this.handleClick()}>
              {this.state.buttonText}
            </button>
            <button onClick={() => this.increment()}>Increment</button>
            <p>You've clicked {this.state.count} times</p>
          </div>
        );
      }
    }

// 2. Export class component
export default StatefulGreeting;