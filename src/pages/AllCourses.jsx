import React, { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { AuthContext } from '../Auth/ContextProvider'
import axios from 'axios'

function AllCourses() {
    const { dark } = useContext(AuthContext)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/courses')
            .then(res => {
                setCourses(res.data)
            })
    }, [])
    console.log(courses)

    return (
        <div className='w-full'>
            <h2 className='flex items-center justify-center py-10 text-4xl font-semibold mb-5 text-[#B18B5E]'><Fade cascade duration={200}>All Courses</Fade></h2>
            <div className='flex items-center gap-5 flex-wrap justify-center py-10'>
                {
                    courses?.map((item) => (
                        <div className="relative card lg:w-96 w-80 shadow-xl">
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
                                <h3 className='my-2'>Price : <span className='text-orange-500'>${item.price}</span></h3>
                                <h3 className='mb-2'>Area : <span className='text-orange-500'>"{item.course_Area}"</span></h3>
                                <div className="card-actions justify-center">
                                    <button className="btn p-3 w-fit font-semibold text-black border-2 border-[#E6A303] hover:text-white  rounded-xl hover:bg-gradient-to-r from-[#E6A303] to-[#876514]">View Detail</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllCourses