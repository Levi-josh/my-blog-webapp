import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import shortid from 'shortid'
import { useOutletContext } from 'react-router-dom'

const Layout = () => {
  const [sidebar2,setsidebar2]= React.useState(false)
  const [postblog, setpostblog] = React.useState({ content: "", title: "", id: "", date: "", user: "" ,ischecked: false,like:false,like2:false,share:false,book:false});
 
  const [spin, setspin] = React.useState(false)

  const [content,setcontent] = React.useState(false)
  const [postarr, setpostarr] = React.useState([]);
 
 const [displaypost, setDisplaypost]=React.useState({})
  const [search, setsearch] = React.useState("");
  const [notes, setnotes]= React.useState([]);
  const { active, changeActive ,welcome,welcomemsg,sidebar,showbar} = useOutletContext()
  const [changestatus,setchangestatus]= React.useState([false]);
  const [user,setuser] =React.useState({username: "", password: ""})
  const[unread,setunread] = React.useState(0)
  const location = useLocation()
  
  

  React.useEffect(() => {
    const newuser = location.state
    
  setuser(prev=>newuser===null?"":({...prev,username:newuser.username,password:newuser.password}))
},[])
  
  /*useEffect(() => {
    const filterpost = postarr.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    setDisplayarr(filterpost) 
  },[search])*/
  if (!active ) { return <Navigate to='/signin' /> }
  
  function changeside() {
    setsidebar2(prev => !prev)
    showbar()
  }
  console.log(user)
  function handlesearch(e) {
  
    setsearch(e.target.value);

  }
  function handlecheck(checkid,checktype) {
  const check=  notes.map(prev => prev.id === checkid ? {
      ...prev, ischecked: !prev.ischecked
    
  } : prev)
    setnotes(check)
    
   const c =checktype?unread+1:unread-1
    setunread(c)
  }
  function handledelete(delid,deltype) {
  const deleteitem =  notes.filter(item => item.id !== delid)
    setnotes(deleteitem) 
    const d = deltype ? unread :unread - 1
    setunread(d)
  }
  function handlechange(e) {
    const { name, value } = e.target
    const mydate = new Date();
    const postdate = mydate.toLocaleString();
    setpostblog(prev => ({ ...prev, [name]: value, date: postdate, user:  user.username , id:shortid.generate(),ischecked: false,like:false,like2:false,share:false,book:false}))
  }
  function postitem(e) {
    e.preventDefault();
    setpostarr(prev => [...prev, { ...postblog }])
    
    setunread(prev => prev+1)
    setnotes(prev => [...prev, { ...postblog }])
    setpostblog({ content: "", title: "" })
  }

 /* function handledeletepost(del) { 
  const deletepost =  postarr.filter(post => post.id !== del)
    
    setpostarr(deletepost)
    const deldisplay = displayarr.filter(post => post.id !== del)
    setDisplayarr(deldisplay)
    setDisplaypost("")
    setcontent(false)
    setchangestatus(prev=>!prev)
  }*/
 
  function handledisplay(displayId) {
    setcontent(false)
    setspin(true)
    setTimeout(() => { 
  const newsfeed=  postarr.filter(item=>item.id === displayId)
      setDisplaypost(...newsfeed)
      setcontent(true)
      setspin(false)
    }, 2000)
    
  }
  function bookmark(b) {
    
    setDisplaypost(prev =>( { ...prev, book : !b }) )
  }
  function fliplike(l) {
    setDisplaypost(prev =>( { ...prev, like : !l ,like2:prev.like2?!prev.like2:prev.like2}) )
  }
  function flipdislike(d) {
    setDisplaypost(prev =>( { ...prev, like2 : !d,like:prev.like?!prev.like:prev.like }) )
  }
  function flipshare(s) {
    setDisplaypost(prev =>( { ...prev, share : !s }) )
  }
console.log(unread)
  
 
  return (
    <div className={sidebar ?  "layout2":'layout' }>
      <Header showbar={showbar} changeside={changeside} totalblog={postarr.length} sidebar={sidebar} sidebar2={sidebar2} search={search} handlesearch={handlesearch} changeActive={changeActive} active={active} username={user.username} unread={unread } />
      <Outlet context={{ postarr,postblog,handlechange,postitem,search,welcome,welcomemsg,user,handlecheck,unread,handledelete,notes,displaypost,spin,content,handledisplay,changestatus,fliplike,flipdislike,flipshare,bookmark}}/> 
    <Footer/>  
    </div>
  )
}

export default Layout