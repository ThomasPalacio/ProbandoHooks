import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../helpers/procesoPesado'
import useCounter from '../hooks/useCounter'

const MemoHooks = () => {

   const {counter,increment} =  useCounter(500)

   const [show, setshow] = useState(true)

  

   const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])


  return (
    <div>

        <h2>MemoHooks</h2>
        <hr></hr>


        <h3>Counter: <small>{counter}</small></h3>
        <button className='btn btn-primary' onClick={increment}>+1</button>

        <button className='btn btn-primary m-5' onClick={() =>{
            setshow(!show)
        }}>show/hide</button>

        <p>{memoProcesoPesado}</p>

    </div>
  )
}

export default MemoHooks