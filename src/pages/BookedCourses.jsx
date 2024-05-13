import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Auth/ContextProvider'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function BookedCourses() {
  const [data, setData] = useState([])
  const { user, dark } = useContext(AuthContext)
  
  useEffect(() => {
    axios.get(`https://a11-server-phi.vercel.app/booked_courses?email=${user.email}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [user.email,data])

  return (
    <div className='w-full'>
      <Helmet>
        <title>Skillify || Booked Courses</title>
      </Helmet>
      <h2 className='flex items-center justify-center py-10 text-4xl font-semibold mb-5 text-orange-500'><Fade cascade duration={200}>My Booked Courses</Fade></h2>
      <div className='flex flex-wrap gap-5 items-center justify-center py-10'>
        {
          data?.length === 0 &&
          <div className='flex items-center justify-center'>
            <h1 className='text-xl font-semibold text-orange-500'>No Booked Courses</h1>
          </div>
        }
        {
          data?.map((item) => (
            <div key={item?._id} className={`relative card lg:w-96 w-96 shadow-xl ${dark ? 'border-2 border-white' : 'border-0'}`}>
              <figure className='w-full h-[30vh]'><img className='rounded-t-xl w-full h-full object-cover' src={item.image} alt="Shoes" /></figure>
              <div className='flex flex-col gap-2 py-3 items-center  w-full'>
                <h1 className='font-semibold'>Course Provider </h1>
                <div className='flex items-center  flex-col justify-center gap-2'>
                  <div className='w-14 rounded-full'>
                    <img className='rounded-full' src={item?.provider_img} alt="" />
                  </div>
                  <h1>Name: {item?.provider_name}</h1>
                  <h1>Email: {item?.provider_email}</h1>
                </div>
              </div>
              <div className="card-body">
                <h2 className="font-semibold lg:text-xl text-lg whitespace-nowrap">{item?.name}</h2>
                <p className='text-sm'>{item?.des}</p>
                <h3 className='my-2'>Price : <span className='text-orange-500 font-semibold'>{item.price}</span></h3>
                <h3 className='mb-2'>Course Status :
                  <span
                    className={`${
                      item.course_Status === "pending" ? "text-red-600 font-semibold" :
                      item.course_Status === "working" ? "text-yellow-500 font-semibold" : 
                      item.course_Status === "completed" ? "text-green-500 font-semibold" : ""
                      }`}>
                    "{item.course_Status}"
                  </span></h3>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BookedCourses