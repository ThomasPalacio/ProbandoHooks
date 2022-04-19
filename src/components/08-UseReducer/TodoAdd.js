import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {

    const [{description},handleInputChange, reset] = useForm({
        description:''
    })

    const handleSubmit =(e) =>{
        e.preventDefault();

        if (description.trim().length <= 5) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc:description,
            done:false
        }

        handleAddTodo(newTodo)
        reset();
    }

  return (
    <>
        <h4>Agregar Todo</h4>  
            <hr></hr>  
            <form onSubmit={handleSubmit}>

                <input
                type='text'
                name='description'
                placeholder='Aprender...'
                className='form-control'
                value={description}
                onChange={handleInputChange}
                />

                <button
                type='submit'
                className='btn btn-outline-primary btn-block mt-1'
                >Agregar</button>
            </form>
    </>
  )
}
