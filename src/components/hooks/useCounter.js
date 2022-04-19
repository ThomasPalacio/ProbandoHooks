import { useState } from "react"


const useCounter = (inicialState = 10) => {
  
    const [counter, setCounter] = useState(inicialState)

    const increment = () => {
        setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(inicialState)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return{
        counter, 
        reset,
        increment, 
        decrement
    };
}

export default useCounter;
