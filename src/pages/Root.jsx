import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { AuthContext } from '../Auth/ContextProvider'

function Root() {
  const { dark } = useContext(AuthContext)
  return (
    <div className={`${dark ? 'bg-[#212121] text-white' : 'bg-[#f2f2f2] text-black'}`}>
        <Nav />
      <div className={`min-h-screen ${dark ? 'bg-[#212121] text-white' : 'bg-[#f2f2f2] text-black'}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root