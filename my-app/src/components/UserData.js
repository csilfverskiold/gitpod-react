import React from 'react'

function UserData(props) {
  return (
    <div>
        <h1>{props.isLoaded ? "Data is loaded!" : "Loading..."}</h1>
    </div>
  )
}

export default UserData