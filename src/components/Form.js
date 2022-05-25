import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { formatWithValidation } from 'next/dist/shared/lib/utils'

export default function Form(formInfo) {
    const [userInfo, setUserinfo] = useState({})

    const handleChange=(event)=>{
        setUserinfo({...userInfo, [event.target.name]:event.target.value})
    }
    const handleSubmit=(event)=>{
        console.log(userInfo)
        
        event.preventDefault();
    }

  return (
    <form onSubmit={e=>{handleSubmit(e)}} className={styles.container}>
      <h1>{formInfo.name} form</h1>
      <label>Username
      <input type="text" value={userInfo.username} name="username" onChange={e=>{handleChange(e)}}></input>
      </label>
      <label>Password
      <input type="text" value={userInfo.password} name="password" onChange={e=>{handleChange(e)}}></input>
      </label>
      <input type="submit"/>
    </form>
  )
}
