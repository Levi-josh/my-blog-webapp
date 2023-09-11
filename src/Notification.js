import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom'

const Notification = () => {
  const { postarr,postblog ,handlecheck,unread,notes,handledelete} = useOutletContext();
  



  const newnote = notes.map(item => { return (<div className='notediv' key={item.id}><p> {`${item.user}   Your new article "${item.title}" has been approved`} </p><div className='mark-note'><FaTrashAlt onClick={()=>handledelete(item.id,item.ischecked)}/><div><input type='checkbox' checked={item.ischecked } onChange={()=>handlecheck(item.id,item.ischecked)}  /> <label >mark as read</label> </div></div></div>)})
  return (
    <div className='note'>
      <div className='unread'>{unread===0?"you have no unread messages":`you have ${unread} unread message${unread===1?"":"s"}`}</div>
      <div className='newnote'>{newnote.reverse()}</div>
    </div>
  )
}

export default Notification