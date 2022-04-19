import React, { useEffect, useState} from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [stateForm, setStateForm] = useState({
        name: "",
        email:""
    })
    const {name, email} = stateForm;

   /*  useEffect = (() =>{
        
    }, []);

    useEffect = (() =>{
        
    }, [stateForm]);

    useEffect = (() =>{
        
    }, [email]); */


   const handleInputChange = ( {target} ) =>{
        setStateForm({
            ...stateForm,
            [target.name]: target.value
        })
    }

  return (
    <>
    <h2>SimpleForm</h2>
    <hr />

    <div className='form-group'>
        <input type='text' name='name' className='form-control'placeholder='tu nombre' autoComplete='off' value={name} onChange={handleInputChange} />

    </div>
    <div className='form-group'>
        <input type='text' name='email' className='form-control'placeholder='tu email' autoComplete='off' value={email} onChange={handleInputChange} />

    </div>

    {(name === '123') && <Message />}
    </>
  )
}
