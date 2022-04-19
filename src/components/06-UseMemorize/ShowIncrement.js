import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    
    console.log('Me volvi a generar BOLUDOO');
 
 
    return (
    <button 
    className='btn btn-primary'
    onClick={() =>{
        increment(5)
    }}
    >
        incrementar
    </button>
  )
}
)