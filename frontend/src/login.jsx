import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'
function Login({setIsAuthenticated}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async(e) =>
  {
    e.preventDefault();
    try{
      const response= await axios.post('http://localhost:4000/api/login',{name,password}) 
    console.log(response.data);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true')
    navigate('/')
    }
    catch(err)
  {
    console.log(err)
  }
  }
  
  return (
    <div className='min-h-screen flex justify-center mt-24 items-start '>
      <form action="/login" method='post' className='border-2 flex flex-col w-1/2 h-1/2 p-8' onSubmit={handleSubmit}>
      <label htmlFor="name" className='text-base'>enter your name:</label>
      <input type="text" placeholder='name' name='name' className='border p-2 m-2' value={name} onChange={(e)=> setName(e.target.value)}/>
      <label htmlFor="password">enter your password:</label>
      <input type="password" placeholder='password' name='password' className='border p-2 m-2' value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <button type='submit' className='bg-sky-400 border p-2 m-2 rounded w-1/5'>Login</button>
      </form>
    </div>
  )
}

export default Login