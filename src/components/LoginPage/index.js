import {useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const passwordType = 'password'
const textType = 'text'

const LoginPage = () => {
    const [showingPassword, setShowingPassword] = useState(false)
    const onShowingPassword = event => {
        setShowingPassword(event.target.checked)
    }


    const changingPasswordType = showingPassword? textType : passwordType

    return(
        <div className="login-page-container">
            <h1>Login</h1>
            <form className='form-container'>
                <input placeholder='Username' id="username" type="text"/>
                <input placeholder='Password' id="password" type={changingPasswordType}/>
                <div className='checkbox-container'>
                    <input onChange={onShowingPassword} id="showpassword" type='checkbox'/>
                    <label htmlFor='showpassword'>Show Password</label>
                </div>
                <Link to="/resetPassword"><p>Forgot Password?</p></Link>
                <div className='button-container'>
                <Link to='/'><button className='login-button' type='submit'>Login</button></Link>
                <Link to="/signUp"><button className='login-button' type='button'>Sign Up</button></Link>
                </div>
            </form>
        </div>
    )
}

export default LoginPage