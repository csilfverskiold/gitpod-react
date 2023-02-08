// Hooks in React
// Showcasing useState() Hook with Objects and Arrays part 2

import React, { useState } from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({
                        // "To fix this, all we need  to do is spread the current value of the  
                        // name property into the object we’re pushing  into the state with the setName function.
                        // By doing this, the entire name object  will be copied into the new object,  
                        // and the appropriate properties will  just be replaced with their new values."
                        ...name, firstName: e.target.value
                    })}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({
                        ...name, lastName: e.target.value
                    })}
                />
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default UseStateWithObjects

// Using useState() hooks: 
// "First, when working with objects, always spread  the object you’re replacing into the new one,  
// just like with an array, as without doing  this, the entire object will be replaced.  
// Then follow it with the  properties you’d like to change.
// And second, always pass it a function whenever  the value you’re pushing into the state depends  
// on something in the previous state, just  like you would with the setState method." 