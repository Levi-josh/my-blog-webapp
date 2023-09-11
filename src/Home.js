import React, { useEffect } from 'react'
import { FaBookmark, FaShare, FaSpinner, FaThumbsDown, FaThumbsUp, FaTrashAlt } from 'react-icons/fa';
import { useLoaderData, useOutletContext } from 'react-router-dom'

const Home = () => {
 
  
  const { postarr,search,welcome,welcomemsg,user,handledeletepost,displaypost,spin,content,handledisplay,fliplike,flipdislike,flipshare,bookmark} = useOutletContext();
  
  

  const [displayarr, setDisplayarr] = React.useState([])
 
  

 /* function fliplike() {
    const l = like2 ? false : null
    setLike2(l)
    setLike(prev=>!prev)
  }*/
  
 React.useEffect(() => {
    const filterpost = postarr.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    setDisplayarr(filterpost) 
 }, [search])
  console.log(displaypost.like)
  const postarray= displayarr.map(item => { return (<div className='new-post'key={item.id} onClick = {() => handledisplay(item.id)}><h4 className='item-title'>{(item.title).length>28?`${(item.title).slice(0,28)}...`:item.title}</h4><div className='flex-newpost'><p className='item-user'>{item.user}</p><p className='item-date'>{item.date}</p></div></div >) })

  return (
    <div className= 'home'>
      <div className='home-title'><div className='new-blog2'><div className='new-blog'>New blogs</div></div>{postarray.reverse()}</div>
      <div className='home-text'>{spin && <FaSpinner className='spinner' />}{content && <><div className='post-user'><h3>{displaypost.title}</h3></div><div className='post-content'><p>{displaypost.content}</p></div><div className='post-icons'><FaThumbsUp className={displaypost.like ? "whiteup" : "blackup"} onClick={()=>fliplike(displaypost.like)}/><FaThumbsDown className={displaypost.like2 ? "whitedown" : "blackdown"} onClick={()=>flipdislike(displaypost.like2)}/><FaShare className={displaypost.share?"whiteshare":"blackshare" } onClick={()=>flipshare(displaypost.share)}/><FaBookmark className={displaypost.book?"whitebook":"blackbook"} onClick={()=>bookmark(displaypost.book)} /></div></>}{welcome && <div className='welcome-msg'>{`Hi ${user.username} welcome to J-blog.A platform built to help you share your blog,novels,stories etc with your friends and family.`}<button className='welcome-btn' onClick={welcomemsg}>Get started</button></div>}</div>
    </div>
  )
}

export default Home