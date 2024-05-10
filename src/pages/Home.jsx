import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import { AuthContext } from '../Auth/ContextProvider'

function Home() {
  const {dark} = useContext(AuthContext)
  return (
    <div className={`${dark ? 'bg-[#212121] text-white' : 'bg-[#f2f2f2] text-black'}`}>
      <Hero />
      <Popular/>
    </div>
  )
}

export default Home