import React from 'react'
import {useState} from 'react'

function Counter() {
    const [count,setCount]=useState(0);
    

    const increase=()=>{
            setCount(count+1)
    };
  return (
    <div>
        <h1>Counter</h1>
        <h2> {count} </h2>
        <br></br>
        <button onClick={increase}>increase</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </div>
  )
}

export default Counter