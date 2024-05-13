import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../Auth/ContextProvider'
import { Helmet } from 'react-helmet'

function CategoriesPage() {
  const [data, setData] = useState([])
  const {dark} = useContext(AuthContext)
  const { name } = useParams()
  let categoryName = name.replace(/\W+/g, '')

  useEffect(() => {
    axios.get(`https://a11-server-phi.vercel.app/coursesByName?name=${categoryName}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))

    window.scrollTo(0, 0)
  }, [categoryName])

  return (
    <div>
      <Helmet>
        <title>Skillify || {name} </title>
      </Helmet>
      <h2 className='flex items-center justify-center py-10 text-4xl font-semibold mb-5 text-orange-500'><Fade cascade duration={200}>{name}</Fade></h2>

      <div className='flex items-center gap-5 flex-wrap justify-center py-10'>
        {
          data?.map((item) => (
            <div key={item?._id} className={`relative card lg:w-96 w-96 shadow-xl ${dark ? 'border-2 border-white' : 'border-0'}`}>
              <figure className='w-full h-[30vh]'><img className='rounded-t-xl w-full h-full object-cover' src={item.image} alt="Shoes" /></figure>
              <div className='flex flex-col gap-2 py-3 items-center  w-full'>
                <h1 className='font-semibold'>Course Provider </h1>
                <div className='flex items-center  flex-col justify-center gap-5'>
                  <div className='w-14 rounded-full'>
                    <img className='rounded-full' src={item?.provider?.image} alt="" />
                  </div>
                  <h1>{item?.provider?.name}</h1>
                </div>
              </div>
              <div className="card-body">
                <h2 className="font-semibold lg:text-xl text-lg whitespace-nowrap">{item?.Course_name}</h2>
                <p className='text-sm'>{item?.short_des}</p>
                <h3 className='my-2'>Price : <span className='text-orange-500 font-semibold'>${item.price}</span></h3>
                <h3 className='mb-2'>Area : <span className='text-orange-500 font-semibold'>"{item.course_Area}"</span></h3>
                <div className="card-actions justify-center">
                  <Link to={`/details/${item._id}`}> <button className="btn p-3 w-fit font-semibold text-black border-2 border-[#E6A303] hover:text-white  rounded-xl hover:bg-gradient-to-r from-[#E6A303] to-[#876514]">View Detail</button></Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CategoriesPage