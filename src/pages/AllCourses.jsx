import React, { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { AuthContext } from '../Auth/ContextProvider'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { RxCrossCircled } from "react-icons/rx";
import { motion } from 'framer-motion'

function AllCourses() {
    const { dark, setDetailsValue } = useContext(AuthContext)
    const [courses, setCourses] = useState([])
    const [resultName, setResultName] = useState(false)
    const [reloade, setReloade] = useState(false)
    const [searchValue, setSearchValue] = useState()
    const [loading, setloading] = useState(false)


    useEffect(() => {
        setloading(true)
        axios.get('https://a11-server-phi.vercel.app/courses')
            .then(res => {
                setCourses(res.data)
                setloading(false)
            })
        window.scrollTo(0, 0)
    }, [reloade])

    const handelSearch = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.serach.value
        setSearchValue(name)

        setloading(true)
        axios.get(`https://a11-server-phi.vercel.app/coursesBySearch?name=${name}`)
            .then(res => {
                setloading(false)
                setCourses(res.data)
                setResultName(true)
                form.reset()
            })
            .catch(err => {
                console.log(err)
            })


    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>Skillify || All Courses</title>
            </Helmet>
            <h2 className='flex items-center justify-center py-10 text-4xl font-semibold mb-5 text-orange-500'><Fade cascade duration={200}>All Courses</Fade></h2>
            <div className={`flex items-center justify-center flex-col gap-3`}>
                <form onSubmit={handelSearch} className={`flex flex-wrap justify-center items-center gap-5 px-6 py-5 rounded-xl ${dark ? "bg-[#1A1818] text-white" : "bg-[#E5E6E6] text-black"}`}>
                    <input required className={`w-fit rounded-xl font-semibold  md:text-2xl text-xl outline-none px-5 py-3  bg-transparent border-2  ${dark ? "border-[#f2f2f2]" : "border-[#1A1818]"}`} type="search" name='serach' placeholder="Course Name...." id="" />
                    <input type='submit' value={"Search"} className='border-2 px-3 py-2 rounded-xl border-green-500 font-semibold hover:bg-green-800 hover:border-green-800' />
                </form>
                {
                    resultName &&
                    <h2 className='flex font-semibold items-center justify-center gap-2 text-xl'>Search result of
                        <span onClick={() => {
                            setResultName(false),
                                setReloade(!reloade),
                                setSearchValue('')
                        }} className='flex items-center justify-center gap-2 rounded-2xl border-2 border-white p-2 cursor-pointer bg-green-800 text-white' >{searchValue}
                            <span className='font-bold'><RxCrossCircled size={24} color='#fff' /></span>
                        </span>
                    </h2>
                }
            </div>
            <div className='flex items-center gap-8 flex-wrap justify-center py-10'>
                {
                    loading &&
                    <div className='flex justify-center items-center w-full h-full'>
                        <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${dark ? "border-gray-200" : 'border-black'}`}></div>
                    </div>
                }
                {
                    courses?.map((item,i) => (
                        <motion.div key={item?._id} className={`relative card lg:w-96 w-96 shadow-xl cursor-pointer ${dark ? 'border-2 border-white' : 'border-0'}`}
                            initial={{ opacity: 0, y: "100%" }}
                            whileHover={{ scale: 1.1 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <figure className='w-full h-[30vh]'><img className='rounded-t-xl w-full h-full object-cover' src={item.image} alt="Shoes" /></figure>
                            <div className="p-5">
                                <h2 className="font-semibold lg:text-xl text-lg whitespace-nowrap">{item?.Course_name}</h2>
                                <p className='text-sm'>{item?.short_des}</p>
                                <h3 className='my-2'>Price : <span className='text-orange-500 font-semibold'>${item.price}</span></h3>
                                <h3 className='mb-2'>Area : <span className='text-orange-500 font-semibold'>"{item.course_Area.replace(/([a-z])([A-Z])/g, '$1 & $2')}"</span></h3>
                                <div className="card-actions justify-center">
                                    <Link to={`/details/${item._id}`}> <button className="btn p-3 w-fit font-semibold text-black border-2 border-[#E6A303] hover:text-white  rounded-xl hover:bg-gradient-to-r from-[#E6A303] to-[#876514]">View Detail</button></Link>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllCourses