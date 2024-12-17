// Implement a Login Form: Build a login form with validation for email and password fields.

import React, { useEffect } from "react";

const LoginForm = ()=>{

    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [emailError,setEmailError] = React.useState("");
    const [passwordError,setPasswordError] = React.useState("");


    useEffect(()=>{
        if(email){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;           
            
            if(!emailRegex.test(email)){
                setEmailError("Invalid Email");
            }else{
              setEmailError('')
            }
        }else {
            setEmailError("");
        }
               if(password){
                const passwordRegex = /^.{8,}$/;
                if (!passwordRegex.test(password)) {
                    setPasswordError("Password must be at least 8 characters long");
                  } else {
                    setPasswordError("");
                  }
               }else {
                setPasswordError("")
               }
           
        

    },[email,password])





    return(
        <>
        <h1 className=""> Login Form</h1>

          <form onSubmit={()=>{
              if(emailError || passwordError){
                alert("Fix error ")

              }else{
                alert("Form submitted")
              }
          }}>
          <input type="email" placeholder="vermaaditya123@gmail.com " value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        {emailError && <span>{emailError}</span>}
        <input type="password" placeholder="password123" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        {passwordError && <span>{passwordError}</span>}

        <button>
            Login
        </button>
          </form>

        </>
    )
}

export default LoginForm;