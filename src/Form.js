
import './Form.css'
import React, { useState } from 'react'
import { FormData } from './FormData'

export const Form = () => {
    const [value,setValues]=useState({firstName:"",lastName:"",email:"",date:"",password:""})
    // console.log(value);
    const [data,setData]=useState({firstName:"",lastName:"",email:"",date:"",password:""})
function onChange(e)
{
  setValues({...value, [e.target.name]: e.target.value })
  
}
// console.log(setValues.value); value show undefined .....
function onSubmit(e)
{
 e.preventDefault()
 setData(value)
}

  return (
    <>
      <div>
           
        <form onSubmit={onSubmit} >
            <h4>Prescription form</h4>
            <label htmlFor="firstName">firstName:- </label>
            <input onChange={onChange} type='text' id='firstName' name='firstName'></input>
            <br/>
            <label htmlFor="lastName">lastName:- </label>
            <input onChange={onChange} type='text' id='lastName' name='lastName'></input>
            <br/>
            <label htmlFor="email">email:- </label>
            <input onChange={onChange} type='email' id='emial' name='email'></input>
            <br/>
            <label htmlFor="date">date:- </label>
            <input onChange={onChange} type='date' id='date' name='date'></input>
            <br/>

            <label htmlFor="password">password:- </label>
            <input onChange={onChange} type='password' id='password' name='password'></input>
            <br/>
            <center>
            <button>Submit</button>

            </center>

        </form>
      </div>
      <FormData {...data} />
    </>
  )
}
