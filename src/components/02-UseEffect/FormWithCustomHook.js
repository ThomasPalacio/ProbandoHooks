import React, { useEffect }  from 'react'
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const [values, handleInputChange] = useForm({
        name: "",
        email:"",
        password:''
    });

    const {name, email, password} = values;
   
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values);
    }

    useEffect(() => {
      console.log('email cambio');
    }, [email])
    

  return (
    <form onSubmit={handleSubmit}>
    <h2>SimpleForm</h2>
    <hr />

    <div className='form-group'>
        <input type='text' name='name' className='form-control'placeholder='tu nombre' autoComplete='off' value={name} onChange={handleInputChange} />
    </div>

    <div className='form-group'>
        <input type='text' name='email' className='form-control'placeholder='tu email' autoComplete='off' value={email} onChange={handleInputChange} />
    </div>

    <div className='form-group'>
        <input type='password' name='password' className='form-control'placeholder='contraseña'  value={password} onChange={handleInputChange} />
    </div>

    <button type='submit' className='btn btn-primary' >
        Enviar
    </button>
    </form>
  )
}


