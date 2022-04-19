import React, { useState } from 'react'

const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 20,
        counter2:50, 
        counter3:43, 
        counter4:543
    })

const {counter1,counter2} = state;

  return (
    <>
    <h2>Counter {counter1}</h2>
    <h2>Counter {counter2}</h2>
    <hr />

    <button 
    onClick={() => {
        setState({
            ...state,
            counter1:counter1 + 1,
        })
    }}
    className='btn btn-primary'>
        +1
    </button>
    
    
    </>
  )
}

export default CounterApp