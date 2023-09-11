import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  let date = new Date();
  let mydate = date.getFullYear();
  console.log(mydate)
  return (
    <div className='footer'>
      <p>Copyright</p>

     <FaRegCopyright />    {mydate}
      
    </div>
  )
}

export default Footer