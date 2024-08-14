import React, { useState } from 'react';
import './Usestate.css'

const Usestate=()=>{
    const [count , setCount]=useState(0)

    const handleIncrement=()=>{
        setCount(count +1);
    }

    const handleDecrement=()=>{
        if(count === 0) return
        setCount(count -1);
    }
   return (
    <div className='btn-container'>
    <div className='btn'>
    <button className='btn-inc' onClick={handleIncrement}>+</button>
    <h1>{count}</h1>
    <button className='btn-dec' onClick={handleDecrement}>-</button>
    </div>
    </div>
   )
}

export default Usestate;