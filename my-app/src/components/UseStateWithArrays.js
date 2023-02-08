// Hooks in React
// Showcasing useState() Hook with Objects and Arrays

import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3]);
    const addNums = () => {

        // "Now, each time we click the button, the array in  the state is updated to contain all the previous  
        // values thanks to the spread operator, plus the new  value, which is 4. To make sure we don’t always  
        // add number 4, we will replace it with nums.length  + 1 so that the numbers increase by one."
        setNums([...nums, nums.length +1]);
    }
  return (
    <div>
        <button onClick={addNums}>Add Item</button>
        <ul>
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArrays