// Network requests in React
// Showcasing - Fetching data with GET

import React, { Component } from 'react'
import axios from 'axios'

export class HTTPRequests extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: null
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response)
                this.setState({
                    posts: Array.isArray(response.data)
                        ? response.data
                        : [response.data]
                })
                    })
                    .catch(error => {
                        this.setState({
                            error: error.message
                        })
            })
    }

    // "We need to somehow  check when the response comes back  
    // whether the data property is an array,  and then update the state accordingly.
    // The easiest way to do this is to just use the  built in isArray() method from JavaScript.
    // So here let’s adjust our setState call to  say if response.data is already an array,  
    // then we will just set posts  equal to response.data,  
    // and otherwise, we’ll manually set it equal  to an array containing response.data,  
    // because we know that response.data will be an  object. By doing this, whether you request all  
    // posts, or a specific post, the state end  up containing an array of post objects.
    // With all this done, I can freely update the  URL in the GET request to get any post ID."

    render() {
        const posts = this.state.posts;
        return (
            <div>
                <h2>Posts:</h2>
                {/* Commenting out to shorten with const above */}
                {/* {JSON.stringify(this.state.posts)} */}
                {
                    posts.length ? (
                        posts.map(post => (
                            <div key={post.id}>
                                <h2>{post.id}. {post.title}</h2>
                                <h4>By User ID {post.userId}</h4>
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        ))
                    ) : (
                        this.state.error
                            ? <p>{this.state.error}</p>
                            : <h4>Loading posts ...</h4>
                    )
                }
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