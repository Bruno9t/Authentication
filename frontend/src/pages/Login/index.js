import React,{useState} from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'

export default function Login({history}){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function handleSubmit(event){
        event.preventDefault()

        const response = await api.post('/login',{email,password})
        const {_id,token} = response.data

    localStorage.setItem('user',_id)
    localStorage.setItem('TOKENAPP',token)

    history.push('/app')
    }

    return (
        <>
        <p>Login</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail*</label>
                <input type="email"
                id='email'
                placeholder='Your e-mail'
                value={email}
                onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="password">Password*</label>
                <input type="password"
                id='password'
                placeholder='password'
                value={password}
                onChange={event => setPassword(event.target.value)}
                />
                <button type='submit' className='btn'>SignIn</button>

                <Link to ='/signup'>
                    <span>Don't have account? SignUp</span>
                </Link>
            </form>
        
        </>
    )
}