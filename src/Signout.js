import React from 'react'
import { FaReact } from 'react-icons/fa'
import { Link, Navigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

const Signout = () => {


  
  
   const { active,changeActive ,info,submitusers,handlesignup} =useOutletContext()

  

  
 

  if(active){return <Navigate to="/" state={{username:info.username,password:info.password}}/>}
  return (
    
      <div className='signin'>
          <div className='form'>
              <div className='flex-blog'>
              <FaReact className='react-icon2'/>
                  <h1>J-Blog</h1>  
</div>                  
<form className='signin-form' onSubmit={submitusers}>

<h2>Sign up</h2>                 
<input type="text" placeholder='username' value={info.username} name='username'onChange={handlesignup} required></input>
<br></br>                  
          <input type="text" placeholder='password ' value={info.password} name='password' onChange={handlesignup} required></input><br></br> 
<button className='signin-btn'>Sign up</button>
<div className='flex-signin'>
 
 <p>Have an account already?</p>                     
<Link to="/signin" className='signup-link'>Sign in</Link>


                
</div>


</form>     
</div>      
</div>
    
  )
}

export default Signout