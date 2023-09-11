import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Post = () => {

  const {postblog,handlechange,postitem}=useOutletContext()

  return (
    
    <form className='post' onSubmit={postitem}>
      
      <textarea className='textarea' value={postblog.content} onChange={handlechange} name='content' autoFocus required></textarea>
      <input className='post-input' placeholder='Title'value={postblog.title} type='text'onChange={handlechange} name='title'required />
        <button className='post-btn'>Post</button>
      
      
        </form>
  )
}

export default Post