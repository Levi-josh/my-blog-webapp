
import './App.css';
import Home,{loader as homepage} from './Home';
import Layout from './Layout';
import Login from './Login';
import Notification from './Notification';
import Post from './Post';
import Search from './Search';
import Signin from './Signin';
import Signout from './Signout';
import Element from './Element';
import Readnote from './Readnote';


import { Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

function App() {
   

  const myroute = createBrowserRouter(createRoutesFromElements(
    
          <Route element={<Element/>}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}  />
            <Route path='/posts' element={<Post />} />
            <Route path='/login' element={<Login />}  />
            <Route path='/notification' element={<Notification />} />
       
      </Route>
       <Route path="readnote" element={<Readnote/> } />
          <Route path='/signin' element={<Signin />} />
      <Route path='/signout' element={<Signout />} />
      </Route>
        ))
  return (
    <div className="App" >
      <RouterProvider router={myroute}/>  
    </div>
  );
}

export default App;
