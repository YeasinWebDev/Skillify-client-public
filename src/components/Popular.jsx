import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Auth/ContextProvider'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Popular() {
    const { dark, setDetailsValue } = useContext(AuthContext)
    const [courses, setCourses] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        axios.get('https://a11-server-phi.vercel.app/courses')
            .then(res => {
                setCourses(res.data)
                setloading(false)
            })
    }, [])

    return (
        <div className={` xl:px-[15vw] px-5 flex flex-col ${dark ? 'bg-[#212121] text-white' : 'bg-[#f2f2f2] text-black'}`}>
            <div className='flex md:justify-between md:items-center w-full gap-5 flex-col md:flex-row'>
                <div>
                    <h1 className='text-2xl md:text-4xl font-semibold '>Popular Course​s</h1>
                    <h3 className='mt-2 text-sm'>Limitless learning, more possibilities</h3>
                </div>
                <Link to={'/allCourses'}><button className='btn p-3 w-fit font-semibold text-black border-2 border-orange-500 hover:text-white  rounded-xl hover:bg-gradient-to-r from-orange-500 to-orange-600'>View All Course</button></Link>
            </div>
            <div className='mt-10 flex items-center justify-center gap-10 flex-wrap'>
                {
                    loading &&
                    <div className='flex justify-center items-center w-full h-full'>
                        <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${dark ? "border-gray-200" : 'border-black'}`}></div>
                    </div>
                }
                {
                    courses.slice(0, 6).map((item, i) => (
                        <motion.div key={item._id} className="relative card lg:w-96 w-80 shadow-xl cursor-pointer"
                            initial={{ opacity: 0, y: "100%" }}
                            whileHover={{scale:1.1}}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{once:true}}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <figure className='w-full h-[30vh]'><img className='rounded-t-xl w-full h-full object-cover' src={item.image} alt="Shoes" /></figure>
                            <div className='absolute flex justify-center items-center flex-col w-full lg:top-[40%] top-[35%] mb-10'>
                                <div className='w-14 rounded-full'>
                                    <img className='rounded-full' src={item?.provider?.image} alt="" />
                                </div>
                                <h1>{item?.provider?.name}</h1>
                            </div>
                            <div className="card-body mt-10">
                                <h2 className="font-semibold lg:text-xl text-lg whitespace-nowrap">{item?.Course_name}</h2>
                                <p className='text-sm'>{item?.short_des}</p>
                                <h3 className='my-2'>Price : <span>${item.price}</span></h3>
                                <div className="card-actions justify-center">
                                    <Link to={`/details/${item._id}`}><button className="btn p-3 w-fit font-semibold text-black border-2 border-orange-500 hover:text-white  rounded-xl hover:bg-gradient-to-r from-orange-500 to-orange-600">View Detail</button></Link>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Popular