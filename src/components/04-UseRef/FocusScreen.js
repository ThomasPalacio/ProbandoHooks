import React, { useRef } from 'react';

export const FocusScreen = () => {


    const inputRef = useRef()

    const handleClick = () =>{
        inputRef.current.select()
    }


  return (
    <div>
        <h2>FocusScreen</h2>
        <hr></hr>
        <input
        ref={inputRef}
        className='form-control'
        placeholder='Su nombre'
        />
        <button 
        onClick={handleClick}
        className='btn btn-outline-primary mt-3'>
            Focus
        </button>
    </div>
  )
}
