import React, { useState, } from "react";
import "./signup.css";

function Signup(){
    const[username, setUsername] =useState('')
    const[email, setEmail] =useState('')
    const[password, setPassword] =useState('')
    const[confirmedpassword, setConfirmedPassword] =useState('')

    function updateUsername(e){
        setUsername(e.target.value)
    }
    function updateEmail(e){
        setEmail(e.target.value)
    }
    function updatePassword(e){
        setPassword(e.target.value)
    }
    function updateConfirmedPassword(e){
        setConfirmedPassword(e.target.value)
    }
    function signup(e){
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(confirmedpassword)
        e.preventDefault()
    }


      return(
          <div className="title">
              <div className="form-title">
                  <h1><i>Create an Account</i></h1>
                  <form>
            <h1 id="h2"></h1>

            <div className="form-group">
                <label htmlFor="">Username</label>
                <input type="text" onChange={updateUsername} className="form-control" placeholder="Username"/>
            </div>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="email" onChange={updateEmail} className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" onChange={updatePassword} className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label htmlFor="">ConfirmedPassword</label>
                <input type="password" onChange={updateConfirmedPassword} className="form-control" placeholder="Confirmed Password"/>
            </div>
            <div>
                <button className="btn" onClick={signup}>Sign Up</button>
                <p>Already have an account? <a href=""className="style"><i>Sign In</i></a></p>
            </div>
            </form>
               
                </div>
            </div>


      )


};

export default Signup;