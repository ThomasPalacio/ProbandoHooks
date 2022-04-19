import React, { useState } from 'react'
import MutipleCustomsHooks from '../03-Examples/MutipleCustomsHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    const handleClick =() =>{
        setShow( !show);
    }

  return (
    <div>
        <h3>RealExampleRef</h3>
        <hr></hr>
        {show &&  <MutipleCustomsHooks />}
        <button className='btn btn-primary mt-5'
        onClick={handleClick}>
            Show/Hide
        </button>
    </div>
  )
}
