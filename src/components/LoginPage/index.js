import {useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'

const passwordType = 'password'
const textType = 'text'

const LoginPage = props => {
    const [showingPassword, setShowingPassword] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onShowingPassword = event => {
        setShowingPassword(event.target.checked)
    }

    const handlingUsername = event => {
        setUsername(event.target.value)
    }

    const handlingPassword = event => {
        setPassword(event.target.value)
    }

    const onLoggingIn = async event => {
        event.preventDefault();
        const enteredUserDetails = {username, password}
        const loginUrl = 'https://mobilefirst-backend.vercel.app/login';
        const options = {
            method:"POST",
            body: JSON.stringify(enteredUserDetails),
            headers : {
                'Content-Type':'application/json'
            }
        }
        const response = await fetch(loginUrl, options)
        const data = await response.json()
        console.log(data)
        if (response.ok === true){
            const token = data.jwtToken
            Cookies.set('jwtToken',token, {expires : 5})
            const {history} = props
            history.replace('/')
        }
    }


    const changingPasswordType = showingPassword? textType : passwordType

    return(
        <div className="login-page-container">
            <h1>Login</h1>
            <form className='form-container' onSubmit={onLoggingIn}>
                <input value={username} onChange={handlingUsername} placeholder='Username' id="username" type="text"/>
                <input value={password} onChange={handlingPassword} placeholder='Password' id="password" type={changingPasswordType}/>
                <div className='checkbox-container'>
                    <input onChange={onShowingPassword} id="showpassword" type='checkbox'/>
                    <label htmlFor='showpassword'>Show Password</label>
                </div>
                <Link to="/resetPassword"><p>Forgot Password?</p></Link>
                <div className='button-container'>
                <button className='login-button' type='submit'>Login</button>
                <Link to="/signUp"><button className='login-button' type='button'>Sign Up</button></Link>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
