import React from 'react'
import { FaReact } from 'react-icons/fa'
import { Link, Navigate, useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import { Form } from 'react-router-dom'


 



const Signin = () => {
  const [myusername, setmyusername] = React.useState({ username: '', password: '' })
  const [error, seterror] = React.useState(null)
  const [passerror, setpasserror]= React.useState(null)
  const navigate = useNavigate()
  const { active, changeActive, users,showbar} = useOutletContext()
 
  

  function handlecheck(e) {
    const { name, value } = e.target
    setmyusername(prev => ({ ...prev, [name]: value })) 
    seterror(null)
    setpasserror(null)
  }
  
  function loggin(e) {
    
    e.preventDefault()
    /*const d = users.indexOf(myusername.username)>-1 ?true :false*/
    const d = users.filter(item => item.username == myusername.username)
    const user = d.length === 0 ? true : null
    console.log(d)
    seterror(user)
    console.log(user)
    const checkpass = users.filter(item => item.username == myusername.username)
    const auth=  checkpass.length===0?checkpass:checkpass[0]
    const pass =  auth.password == myusername.password ? null : true
    console.log(pass)
    const c =  d.length===0?null:pass
    console.log(c)
    setpasserror(c)
    showbar()
    
    
    if(user===null && pass===null){return changeActive()}
  
    
    
  }
  
  
 if (active) { return <Navigate to="/" state={{username:myusername.username}}/> }
  
  return (
<div className='signin'>
          <div className='form'>
              <div className='flex-blog'>
              <FaReact className='react-icon2'/>
                  <h1>J-Blog</h1>  
</div>                  
<form className='signin-form'onSubmit={loggin} >

          <h2>Sign in</h2> 
 {error &&<p className='red'>no user with that username found!</p>}         
<input type="text" placeholder='username'name='username'onChange={handlecheck} value={myusername.username} required></input>
          <br></br>  
{passerror && <p className='red'>wrong password</p>}          
          <input type="text" placeholder='password' name='password' onChange={handlecheck} value={myusername.password} required></input><br></br> 
 <button className='signin-btn' >Sign in</button>
<div className='flex-signin'>
 
 <p>Dont have an account?</p>                     
<Link to="/signout" className='signup-link'>Sign up</Link>


                
</div>


</form>     
</div>      
</div>
)}


export default Signin