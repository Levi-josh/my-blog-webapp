import React from 'react'
import { Link,  Navigate,  useNavigate } from 'react-router-dom'
import {FaHome,FaBell,  FaReact, FaAddressBook,FaTimes,FaSwatchbook, FaUpload, FaToggleOn, FaUserCircle, FaToggleOff} from 'react-icons/fa'
const Header = (props) => {

  
  

  return (
    <>
    <div className='header'>
      <div>
        <h1 className='j-blog'><FaReact />J-Blog</h1>
      
      </div> 
      <input type='text'className='search-input' value={props.search} onChange={props.handlesearch}/>
       <div className='flex-icons'> 
      <Link to="/" className='header-icon'><FaHome/></Link>
      <Link to="/posts" className='header-icon'><FaUpload/> </Link> 
          <Link to="/notification" className='header-icon2'><FaBell /><span className='notify'>{props.unread}</span></Link>
      
      <FaUserCircle onClick={props.changeside}/>
      </div>  
      </div>
          {props.sidebar2 && <div className='side-bar'>
        <FaTimes className='exit-icon'onClick={props.changeside} />
        <div className='profile'></div>
        <h2>{props.username}</h2>
        <div className='dark-mode'>
          <p>Light mode</p>
          <FaToggleOff />
        </div>
        <div className='side-text'>
          <p>Total blogs</p>
          <p>{props.totalblog}</p>
        </div>
        <div className='side-text'>
          <p>Followers</p>
          <p>0</p>
        </div>
        <div className='side-text'>
          <p>Following</p>
          <p>0</p>
        </div>
        <button className='sign-out' onClick={props.changeActive}>Sign out</button>
      </div>}
     </>    
    
  )
}

export default Header