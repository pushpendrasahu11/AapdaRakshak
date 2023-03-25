import React from 'react'
import {motion} from "framer-motion";
import '../../styles/login.scss'

const Login= () => {

  const options ={
    initial:{
      x:"-100%",
      opacity:0,
    },
    whileInView:{
      x:0,
      opacity:1,
    }}
  return (
     
    <div className='login-container'>
    <div className='login-left'>
        <form className="login">
        <motion.h2 {...options}>Welcome Admin</motion.h2>
        <motion.p {...options}
          transition={{
            delay:.2
          }}
        style={{fontSize:"25px"}}>Login here</motion.p>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <span style={{display:"flex", justifyContent:"start",alignItems:"center"}}><input type="checkbox"/>Remember me  <a style={{marginLeft:"60px"}} href="#">Forgot password</a></span>
        <input type="submit" value="Log In" />
          {/* <div class="links">
        <p>Don't have an account?</p> <a href="/signup">Create an account</a>
          </div> */}
        </form>
      </div>
      <div className="login-right">
      </div>  
    </div>
  
  )
}

export default Login
