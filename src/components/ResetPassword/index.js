import {withRouter} from 'react-router-dom'

import "./index.css"

const ResetPassword = props => {
    const onResettingPassword = () => {
        const {history} = props
        history.replace("/login")
    }
    return(
        <div className="reset-password-container">
            <form >
                <label htmlFor="username">User Name</label>
                <input id="username" type="text"/>
                <label htmlFor="password">Enter New Password</label>
                <input id="password" type="password"/>
                <button onClick={onResettingPassword} type="button">Submit</button>
            </form>
        </div>
    )
}

export default withRouter(ResetPassword)