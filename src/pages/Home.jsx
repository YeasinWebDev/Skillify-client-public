import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import { AuthContext } from '../Auth/ContextProvider'
import DataSection from '../components/DataSection'
import Categories from '../components/Categories'
import Certificates from '../components/Certificates'
import { Helmet } from 'react-helmet'

function Home() {
  const { dark } = useContext(AuthContext)
  return (
    <div className={`${dark ? 'bg-[#212121] text-white' : 'bg-[#f2f2f2] text-black'}`}>
      <Helmet>
        <title>Skillify || Home</title>
      </Helmet>
      <Hero />
      <Popular />
      <DataSection />
      <Categories />
      <Certificates />
    </div>
  )
}

export default Home