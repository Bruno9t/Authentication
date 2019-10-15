import React,{useState} from 'react'
import api from '../../services/api'



export default function Login({ history }){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function handleSubmit(event){
        event.preventDefault()

        const response = await api.post('/register',{
            name,
            email,
            password
        })

        const { _id , token} = response.data

        localStorage.setItem('user',_id)
        localStorage.setItem('TOKENAPP',token)

        history.push('/app')
    }

    return(
        <>
        <p>Register</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name*</label>
                <input id='name'
                type='text'
                placeholder='Your name' 
                value={name}
                onChange={event  => setName(event.target.value)}
                />

                <label htmlFor="email">E-mail*</label>
                <input type="email"
                id='email'
                placeholder='Your best email'
                value={email}
                onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="password">Password*</label>
                <input type="password" 
                id="password"
                placeholder='password'
                value={password}
                onChange={event => setPassword(event.target.value)}
                />

            <button type='submit' className='btn'>SignUp</button>
            </form>
    
        </>
    )
}