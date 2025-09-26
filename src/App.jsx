import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import BookNow from './component/book now/BookNow'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PreLoader from './component/preLoader/PreLoader'
function App() {
  const [loading,setLoading] = useState(false);

  //loading function

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
        setLoading(false);
    },3000);

  },[])


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={loading?<PreLoader/>:<Home/>} />
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
