import React from 'react'
import SideBar from "./SideBar"
import User from "./User"
import { useAuthContext } from '../Context/authUser'


function Home() {


  return (
    <div className='container flex items-center justify-center h-screen'>
      <div className='flex  bg-slate-200 rounded-md border bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 overflow-hidden '>
    <SideBar />
    <User />
      </div>
    </div>
  )
}

export default Home;
