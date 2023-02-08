// Hooks in React
// Showcasing useEffect() Hook

import React, { useState, useEffect } from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('count 1 effect');
        document.title = count;
    }, [count]);
    useEffect(() => {
        console.log('Creating timer');
        const interval = setInterval(() => {
            console.log('Interval executed');
            setTime(time => time + 1)
        }, 1000);
        
        // Cleanup funtion below 
        return () => {
            console.log('cleaning up!');
            clearInterval(interval);
        }
    }, []);
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter

// LOOK UP useEFFECT() FOR BETTER UNDERSTANDING AGAIN

// useEffect()
// "The key  thing I want you to remember from this lesson  
// is that useEffect runs the function  you give it after every render,  
// no matter what."

// "Executing useEffect() on every render is bad for performance. Try using useEffect to execute on conditions. 
// Ideally, each effect would only  run when it actually needs to, not every single time the component renders."

// Effect cleanup functions
// "Here you’ll learn how to  mimic the componentWillUnmount method,  
// which is primarily used for running  cleanup functions, such as removing event  
// listeners and stopping timers and intervals. A cleanup function then, is any function that  
// should be executed just before the component  unmounts, in order to “clean things up”, so the  
// browser is not left with unused event listeners,  timers, hung network requests and so on." 