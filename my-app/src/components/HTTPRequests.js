// Network requests in React
// Showcasing - Fetching data with GET

import React, { Component } from 'react'
import axios from 'axios'

export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
    }
  render() {
    return (
      <div>
        <h2>Posts: </h2>
        {JSON.stringify(this.state.posts)}
      </div>
    )
  }
}

export default HTTPRequests

// "Let’s run the app and take a look at the console.
// You’ll see in here that there’s an object. If you  open the object up, you’ll find it has a bunch of  
// different parts to it, which Axios conveniently  includes for us to keep everything organized.
// There’s a config property which shows you the  configuration you sent to JSONPlaceholder,  
// some headers, some information about the request,  a status code of 200 indicating that the request  
// completed properly, and most importantly,  the data, which is an array of post objects,  
// each containing an id, title, userId and a body.  Let’s grab that data and put it into the state.  
// Can you think of how we might do this? Pause  the video and see if you can do it on your own,  
// or just think about it for a minute  or two and then see if you’re right. 
// If you picked the setState method, you’re  absolutely correct! To add this data into the  
// state, all we need to do is call this.setState()  in the .then() function, and set the new state  
// to contain posts, equal to response.data. Then, to render all the data in the component,  
// let’s use the JSON.stringify()  method to stringify this.state.posts.
// Now, when you run your component you’ll see  it automatically calls out to JSONPlaceholder  
// and requests a list of posts, which are then  put into the state and rendered in the UI.  
// This is the essence of data fetching in React. In this video you’ve learned how to build a  
// component that automatically fetches data from  an API using Axios."

// "To quickly review, first we  
// installed axios, created a class component  and imported axios to use in our component.  
// Then, we wrote the componentDidMount method which  uses Axios to reach out to the JSONPlaceholder  
// API with a GET request, which requests a  list of posts. Once the response comes back  
// from the API, we take that response and use  it to put the data from the returned object  
// into the state of our component. Finally,  we render the data from the state in the UI."