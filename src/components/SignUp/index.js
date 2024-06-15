import axios from 'axios'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const SignUp = () => {
    const [username, setuserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //const [userDetails, setUserDetails] = useState([])
    const id = uuidv4()
    const onEnteringUsername = event => {
        setuserName(event.target.value)
    }

    const onEnteringEmail = event => {
        setEmail(event.target.value)
    }

    const onEnteringPassword = event => {
        setPassword(event.target.value)
    }

    const onSubmiting = async event => {
        event.preventDefault();
        const userDetails = {username,password,email}
        const url = "http://localhost:3000/signup"
        const options = {
            method : "POST",
            body : JSON.stringify(userDetails),
            headers : {
                'Content-Type': 'application/json'
            },
        }
        const response = await fetch(url, options)
        console.log(await response.json())
    }

    return(
        <div>
            <form onSubmit={onSubmiting}>
                <label>USERNAME</label>
                <input value={username} onChange = {onEnteringUsername} type='text'/>
                <label>Email</label>
                <input value={email} onChange = {onEnteringEmail} type='text'/>
                <label>PASSWORD</label>
                <input value={password} onChange = {onEnteringPassword} type='password'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SignUp