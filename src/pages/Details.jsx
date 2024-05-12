import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../Auth/ContextProvider'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import toast from 'react-hot-toast';

function Details() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [popUp, setPopUp] = useState(false)
    const { user, dark ,disable ,setDisable} = useContext(AuthContext)

    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        axios.get(`http://localhost:8000/courses/${id}`)
            .then(res => {
                setData(res.data)
            })
        window.scrollTo(0, 0)
    }, [id])
// console.log(data.provider.image)

    const handleSubmit = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const image = from.image.value
        const provider_email = from.provider_email.value
        const provider_name = from.provider_name.value
        const provider_img = data?.provider?.image
        const user_email = from.user_email.value
        const user_name = from.user_name.value
        const date = startDate
        const price = from.price.value
        const des = from.des.value
        const course_Status = 'pending'

        const userData = {
            name,
            image,
            provider_email,
            provider_name,
            user_email,
            user_name,
            date,
            price,
            des,
            provider_img,
            course_Status
        }

        axios.post('http://localhost:8000/booked_courses', userData)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Purchase successfully')
                    setPopUp(false)
                    setDisable(true)
                }
                else {
                    toast.error('Something went wrong')
                }
            })

    }
    return (
        <div className='w-full py-10'>
            <div className={`flex justify-center items-center md:flex-row flex-col`}>
                <div className='md:w-[30vw] w-full'>
                    <img className='w-full object-cover rounded-xl' src={data?.image} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center py-5'>
                    <h1 className='font-semibold md:text-4xl text-2xl pb-3'>{data?.Course_name}</h1>
                    <p className='text-center md:w-[60%] w-[80%]'>
                        {data?.short_des}
                    </p>
                    <h1 className='font-semibold text-lg py-3'>Price: <span className='text-orange-500 pl-1'>${data?.price}</span></h1>
                    <div className='pt-10 flex flex-col items-center'>
                        <h1 className='font-semibold md:text-4xl text-2xl pb-3'>Course Provider</h1>
                        <h1 className='font-semibold text-lg pb-3'>Name: <span>{data?.provider?.name}</span></h1>
                        <h1 className='font-semibold text-lg pb-3 flex gap-2 items-center'>Image: <span className='w-10 rounded-full'><img className='rounded-full' src={data?.provider?.image} alt="" /></span></h1>
                        <h1 className='font-semibold text-lg pb-3'>Course Area: <span>{data?.course_Area}</span></h1>
                        <button disabled={disable}  onClick={() => setPopUp(true)} className='btn p-3 w-fit font-semibold text-black border-2 border-[#E6A303] hover:text-white  rounded-xl hover:bg-gradient-to-r from-[#E6A303] to-[#876514]'>Book Now</button>
                    </div>
                </div>
            </div>

            {
                popUp &&
                <div className='fixed z-20 top-0 left-0 w-full min-h-[100vh] flex items-center justify-center  bg-gray-900 bg-opacity-50 '>
                    <form className={`w-fit justify-center md:gap-10 flex relative flex-col  flex-wrap px-10 py-10 rounded-xl  ${dark ? 'text-white bg-[#212121]' : 'text-black bg-[#F8F5F0]'}`} onSubmit={handleSubmit}>
                        <div className='flex flex-wrap items-center md:gap-10 '>
                            <label className=' md:text-xl text-lg mb-3 font-semibold '>
                                Course Name:
                                <br />
                                <input className={`md:p-3 p-1 border-2 rounded-xl font-normal  outline-none ${dark ? "bg-[#212121]" : ''}`} type="text" name='name' value={data?.Course_name} readOnly />
                            </label>
                            <label className=' md:text-xl text-lg mb-3 font-semibold '>
                                Course Image:
                                <br />
                                <input className={`md:p-3 p-1 border-2 rounded-xl font-normal  outline-none ${dark ? "bg-[#212121]" : ''}`} type="text" name='image' value={data?.image} readOnly />
                            </label>
                        </div>
                        <div className='flex flex-wrap items-center md:gap-10 '>
                            <label className=' md:text-xl text-lg md:mb-3 font-semibold '>
                                Provider Email:
                                <br />
                                <input className={`md:p-3 p-1 border-2 rounded-xl font-normal  outline-none ${dark ? "bg-[#212121]" : ''}`} type="text" name='provider_email' value={data?.provider?.email} readOnly />
                            </label>
                            <label className=' md:text-xl text-lg md:mb-3 font-semibold '>
                                Provider Name:
                                <br />
                                <input className={`md:p-3 p-1 border-2 rounded-xl font-normal  outline-none ${dark ? "bg-[#212121]" : ''}`} type="text" name='provider_name' value={data?.provider?.name} readOnly />
                            </label>
                        </div>
                        <div className='flex flex-wrap items-center md:gap-10 '>
                            <label className=' md:text-xl text-lg md:mb-3 font-semibold '>
                                User Email:
                                <br />
                                <input className={`md:p-3 p-1 border-2 rounded-xl font-normal  outline-none ${dark ? "bg-[#212121]" : ''}`} type="text" name='user_email' value={user?.email} readOnly />
                            </label>
                            <label className=' md:text-xl text-lg md:mb-3 font-semibold '>
                                User Name:
                                <br />
                                <input className={`md:p-3 p-1 border-2 rounded-xl font-normal  outline-none ${dark ? "bg-[#212121]" : ''}`} type="text" name='user_name' value={user?.displayName} readOnly />
                            </label>
                        </div>
                        <div className='flex items-center flex-wrap md:gap-10'>
                            <label className=' md:text-xl text-lg md:mb-3 font-semibold '>
                                Course Taking Date:
                                <br />
                                <DatePicker className={`cursor-pointer p-3 border-2 rounded-xl font-normal  outline-none ${dark ? "bg-[#212121]" : ''}`} selected={startDate} onChange={(date) => setStartDate(date)} />
                            </label>

                            <label className=' md:text-xl text-lg md:mb-3 font-semibold '>
                                Price:
                                <br />
                                <input className={`md:p-3 p-1 border-2 rounded-xl font-normal  outline-none ${dark ? "bg-[#212121]" : ''}`} type="text" name='price' value={`$${data?.price}`} readOnly />
                            </label>
                        </div>
                        <label className=' md:text-xl text-lg md:mb-3 font-semibold '>
                            Special Instruction:
                            <br />
                            <textarea name='des' className={`w-full p-3 border-2  font-normal rounded-xl outline-none ${dark ? "bg-[#212121]" : ''}`} />
                        </label>
                        <div className='flex justify-between items-center'>
                            <button className='btn p-3 w-fit font-semibold text-black border-2 border-[#E6A303] hover:text-white  rounded-xl hover:bg-gradient-to-r from-[#E6A303] to-[#876514]' type="submit">Purchase</button>
                            <button onClick={() => setPopUp(false)} className='btn p-3 w-fit font-semibold text-black border-2 border-[#E6A303] hover:text-white  rounded-xl hover:bg-gradient-to-r from-[#E6A303] to-[#876514]'>cancel</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default Details