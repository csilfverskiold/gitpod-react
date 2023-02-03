import React from 'react'

function UserMessage(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                <p>Welcome to the site! Please complete the steps below:
                    <ol>
                        <li>Confirm your email</li>
                        <li>Complete your profile</li>
                        <li>Subscribe to the newsletter</li>
                    </ol>
                </p>
            ) :
                (<p>Please sign in</p>)}
        </div>
    )
}

export default UserMessage