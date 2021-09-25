import React from 'react'
import "./Login.css"

export default function Login() {
    return (
        <div className="login">
            <nav>
            </nav>
            <div className="loginForm__info">
                <h1>Create Account</h1>
            <form className="login__form">
                <span className="login__formDetails">
                <label>Your Name</label>
           <input type="text"/>
                </span>
                <span className="login__formDetails">
           <label>Your Email</label>
           <input type="email"/>
           </span>
           <span className="login__formDetails">
           <label>Your Email Again</label>
           <input type="email"/>
           </span>
           <span className="login__formDetails">
           <label>Your Password</label>
           <input type="password"/>   
           </span>
           <span className="login__formDetails">
           <label>Your Password Again</label>
           <input type="password"/>
           </span>
           <button>Create Your Amazon Account</button>
            <p>Already have an account <span>Sign in</span></p>
            </form>
            </div>
        </div>
    )
}
