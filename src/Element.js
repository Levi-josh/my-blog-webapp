import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import shortid from 'shortid'

const Element = () => {
  
  const [active, setactive] = React.useState(false)
  const [users, setusers] = React.useState([{username:"z", password:"z"}])
  const [info, setinfo] = React.useState({ username: "", password: "" })
  const[welcome,setwelcome] = React.useState(false)
  const [sidebar, setsidebar] = React.useState(false)
  const [newnote, setnewnote] = React.useState([])

  
  function welcomemsg() {
    setwelcome(prev => !prev)
     setsidebar(prev=>!prev)
  }
  
  function changeActive() {
       setsidebar(prev=>!prev)
      setactive(prev => !prev)
      
    
  }
  function submitusers(e) {
    
    e.preventDefault()
    
   setusers(prev => [...prev, { ...info }])
   
    
     setactive(prev => !prev)
    setTimeout(() => {
     
      welcomemsg()
      
    }, 1000)
    
  }
  
   function handlesignup(e) {
    const { name, value } = e.target
    setinfo(prev => ({ ...prev, [name]: value }))
  }
 function showbar() {
    
    setsidebar(prev=>!prev)
  }

   
   
  
  
  return (
      
          <Outlet context={{active,changeActive,info,submitusers,handlesignup,users,welcomemsg,welcome,showbar,sidebar}}/>
    
  )
}

export default Element