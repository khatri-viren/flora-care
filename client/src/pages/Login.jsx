import React from 'react'
import BorderButton from '../components/shared/Buttons/BorderButton'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='flex flex-col w-fit mx-auto justify-center text-udark py-32'>
        <h1 className='font-bold text-4xl text-center'>Login</h1>
        <label htmlFor="email" className='mt-12'>Email</label>
        <input className='my-2 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none' type="email" name='email' placeholder='Your email' id='loginemail' />
        <label htmlFor="password">Password</label>
        <input className='my-2 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none' type="password" name='password' placeholder='Your password' id='loginpassword' />
        <div className='mx-auto my-6'>
        <BorderButton title="Login"/>
        </div>
        <div className='text-sm font-light my-3'>New here? <Link className='font-semibold' to={"/signup"}>create account</Link></div>
    </div>
  )
}

export default Login