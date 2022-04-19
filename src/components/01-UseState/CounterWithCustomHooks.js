import React from 'react'
import useCounter from './hooks/useCounter'

const CounterWithCustomHooks = () => {

    const {state, decrement, increment, reset} = useCounter();




  return (
    <>
    <h2>Counter With CustomHooks : {state}</h2>
    <hr></hr>

    <button className='btn btn-primary' onClick={decrement}>-1</button>
    <button className='btn btn-primary' onClick={reset}>reset</button>
    <button className='btn btn-primary' onClick={increment}>+1</button>
    
    </>
  )
}

export default CounterWithCustomHooks