import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const SignUp = () => {
    const [username, setuserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
        event.preventDefault()
        const userDetails = {id,username, password, email}
        console.log(userDetails)
        const url = "http://localhost:3000/users/"
        const options = {
            method : "POST",
            body : JSON.stringify(userDetails)
        }
        const response = await fetch(url, options)
        console.log(response)
    }

    return(
        <div>
            <form>
                <label>USERNAME</label>
                <input onChange = {onEnteringUsername} type='text'/>
                <label>Email</label>
                <input onChange = {onEnteringEmail} type='text'/>
                <label>PASSWORD</label>
                <input onChange = {onEnteringPassword} type='password'/>
                <button onClick={onSubmiting}>Submit</button>
            </form>
        </div>
    )
}

export default SignUp