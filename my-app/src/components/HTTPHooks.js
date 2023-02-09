// Network requests in React
// Showcasing - Duplicating GET/POST Functionality with Hooks

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HTTPHooks() {
    // "Back in HTTPHooks.js, let’s begin with the GET functionality.
    // We can look at HTTPRequests.js to determine the state properties needed for this portion."
    // (And UseStateWithArrays.js to determine how to write the hook.)
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState(null);

    // "... Because the POST request is something that happens on the click of a button, we don’t
    // need a hook at all!
    // We can just directly copy and paste the postToApi function from the original component to this
    // one, and put const in front of it to define it as a constant within the HTTPHooks functional component."

    const postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello World',
                body: 'It works',
                userId: 123,
            }
            // "With Axios it automatically adds the  method parameter when we use the .post() function,  
            // it automatically stringifies the object we send  as the second parameter, and it automatically adds  
            // the correct headers, assuming that we’re working  with JSON data, which almost all APIs accept."
        ).then(response => {
            setPostMessage(response.status === 201
                ? `Success! Title: ${response.data.title}`
                : 'Failed'
            )
        })
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response)
                const data = Array.isArray(response.data)
                    ? response.data
                    : [response.data]
                setPosts(data);
            })
            .catch(error => {
                setError(error.message);
            })
    }, [])

    return (
        <div>
            <button onClick={postToApi}>
                Create Post
            </button>
            <p>{postMessage}</p>
            <h2>Posts:</h2>
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
                    error
                        ? <p>{error}</p>
                        : <h4>Loading posts ...</h4>
                )
            }
        </div>
    )
}

export default HTTPHooks