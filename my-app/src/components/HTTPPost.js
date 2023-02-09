// Network requests in React
// Showcasing - Sending data with POST

import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            apiResonse: null
        }
    }
    postToApi = () => {
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
            this.setState({
                apiResponse: response.data
            })
        })
    }
    render() {
        const { apiResponse } = this.state;
        return (
            <div>
                <button onClick={this.postToApi}>
                    Create Post
                </button>
                {
                    apiResponse
                        ? (<div>
                            <h1>{apiResponse.title}</h1>
                            <p>post id: {apiResponse.id}</p>
                            <p>{apiResponse.body}</p>
                            <p>user id: {apiResponse.userId}</p>
                        </div>)
                        : (<p>please click the button above</p>)
                }
            </div>
        )
    }
}

export default HTTPPost