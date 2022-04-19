import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const TodoApp = () => {

   

    const init = () =>{
        return JSON.parse(localStorage.getItem('todos')) || [];
        
    
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init)

   


    useEffect(() => {
     localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

 const handleDelete = (todoId) =>{

    const action = {
        type:'delete',
        payload: todoId
    }
    dispatch(action);
}

const handleToggle = (todoId) =>{
    const action = {
        type:'toggle',
        payload: todoId
    }
    dispatch(action)
}


const handleAddTodo = (newTodo) =>{
    dispatch({
        type:'add',
        payload: newTodo
    })
}


  return (
    <div>
        <h1>TodoApp ({todos.length})</h1>
        <hr></hr>
        <div className='row'>
            <div className='col-7'>
            <h4>Todos</h4>  
            <hr></hr>  
                <TodoList todos={todos}  handleDelete={handleDelete} handleToggle={handleToggle}/>
            </div>
            <div className='col-5'>
                <TodoAdd handleAddTodo={handleAddTodo}/>
            </div>
        </div>

      
    </div>
  )
}

export default TodoApp