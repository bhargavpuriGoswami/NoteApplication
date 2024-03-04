import React, { useState,useEffect } from 'react'
import './App.css'
import {Header, Footer} from "./Components/index"
// import {LandingPage} from "./Components/index"
import {useDispatch} from "react-redux"
import auth_service from "./appwrite/auth_service"
import {login,logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom'



function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
      auth_service.getLoggedInUser()
      .then((userData)=>{
        if (userData){
          dispatch(login(userData))
        }
        else{
          dispatch(logout())
        }
      })
      .finally(()=>setLoading(false))

  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-orange-100'>
      <div className='w-full block'>
        <Header />
        <main className="">
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
