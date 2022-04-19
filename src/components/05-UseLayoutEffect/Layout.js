import React, { useLayoutEffect, useRef, useState } from 'react'
import useCounter from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'
import './Layout.css'

const Layout = () => {
  
  const {counter,increment} = useCounter(1);

    const { data} =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}
    `)

    const { quote} = !!data && data[0];


    const pTag = useRef()

    const [boxSize, setboxSize] = useState({})
    useLayoutEffect(() => {
     setboxSize(pTag.current.getBoundingClientRect());

    }, [quote])


  return (
    <div>
        <h2>UseLayoutEffect</h2>
        <hr/> 
        
          <blockquote className='blockquote text-right'>
            <p
            ref={pTag}> 
            {quote}
            </p>
          </blockquote>

        <button className='btn btn-primary'
        onClick={increment}>
          Siguiente quote
        </button>
        
        <pre>
            {JSON.stringify(boxSize,null,3)}
        </pre>
        
    </div>
  )
}

export default Layout
