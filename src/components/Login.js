import React from "react";
import logo from './Logo.png';

const Login = (props) => {

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError 
    } = props;

    return ( 
        <section className='login'>
            
            <div className="loginContainer">
                <img src={logo} alt="Logo" />
                <h1>Login</h1>
                <label>Username</label>
                <input
                    type="text"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className='errorMsg'>{emailError}</p>
                <label>Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className='errorMsg'>{passwordError}</p>
                <div className="btnContainer">
               
                <>
                  <button onClick={handleLogin}>Sign In</button>

                  <p>
                    Don't have an account? See HR!!!
                    </p>
                </>

    
                </div>
            </div>

        </section>
     );
}
 
export default Login;