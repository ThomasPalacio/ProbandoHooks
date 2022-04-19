import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'
import { Small } from './Small'

const Memorize = () => {

   const {counter,increment} =  useCounter(10)

   const [show, setshow] = useState(true)



  return (
    <div>

        <h2>Memorize</h2>
        <hr></hr>


        <h3>Counter: <Small value={counter}/></h3>
        <button className='btn btn-primary' onClick={increment}>+1</button>
        <button className='btn btn-primary m-5' onClick={() =>{
            setshow(!show)
        }}>show/hide</button>
    </div>
  )
}

export default Memorize