import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Auth/ContextProvider'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet'

function ManageCourses() {

    const [data, setData] = useState([])
    const { user, dark } = useContext(AuthContext)
    const [reloade, setreloade] = useState(false)
    const [popUp, setPopUp] = useState(false)
    const [popUpData, setPopUpData] = useState([])
    const [id, setId] = useState()


    useEffect(() => {
        axios.get(`https://a11-server-phi.vercel.app/coursesByEmail?email=${user.email}`)
            .then(res => {
                setData(res.data)
            })
    }, [user.email, reloade])


    const handelDetete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to Course this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Course has been deleted.",
                    icon: "success"
                });
                axios.delete(`https://a11-server-phi.vercel.app/courses/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            toast.success('Course Deleted Successfully')
                            setreloade(!reloade)
                        }
                    })
                    .catch(err => toast.error(err.massage))
            }
        });
    }

    const handlePopUp = (id) => {
        axios.get(`https://a11-server-phi.vercel.app/courses/${id}`)
            .then(res => {
                setPopUpData(res.data)
                setId(id)
                setPopUp(true)
            })
            .catch(err => console.log(err))

    }

    const handleUpdateCourse = (e, id) => {
        e.preventDefault();

        const form = e.target
        const Provider_name = form.user_name.value
        const Provider_email = form.user_email.value
        const image = form.image.value
        const Course_name = form.Course_name.value
        const course_Area = form.course_Area.value
        const short_des = form.short_des.value
        const price = form.price.value
        const Provider_img = user?.photoURL

        const data = {
            provider: {
                name: Provider_name,
                email: Provider_email,
                image: Provider_img,
            },
            image,
            Course_name,
            course_Area,
            short_des,
            price
        }

        axios.put(`https://a11-server-phi.vercel.app/courses/${id}`, data)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.success('Course Updated Successfully')
                    setreloade(!reloade)
                    setPopUp(false)
                    form.reset()
                }
            })
            .catch(err => toast.error(err.massage))
    }


    return (
        <div className='w-full'>
            <Helmet>
                <title>Skillify || Manage Courses</title>
            </Helmet>
            <h2 className='flex items-center justify-center py-10 text-4xl font-semibold mb-5 text-orange-500'><Fade cascade duration={200}>Manage Courses</Fade></h2>

            <div className='flex items-center justify-center gap-5 flex-wrap py-5'>
                {
                    data?.map((item) => (
                        <div key={item?._id} className={`relative card lg:w-96 w-96 shadow-xl ${dark ? 'border-2 border-white' : 'border-0'}`}>
                            <figure className='w-full h-[30vh]'><img className='rounded-t-xl w-full h-full object-cover' src={item.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="font-semibold lg:text-xl text-lg whitespace-nowrap">{item?.Course_name}</h2>
                                <p className='text-sm'>{item?.short_des}</p>
                                <h3 className='my-2'>Price : <span className='text-orange-500 font-semibold'>${item.price}</span></h3>
                                <h3 className='mb-2'>Area : <span className='text-orange-500 font-semibold'>"{item.course_Area.replace(/([a-z])([A-Z])/g, '$1 & $2')}"</span></h3>
                                <div className="card-actions justify-center">
                                    <Link to={`/details/${item._id}`}> <button className="btn p-3 w-fit font-semibold text-black border-2 border-[#E6A303] hover:text-white  rounded-xl hover:bg-gradient-to-r from-[#E6A303] to-[#876514]">View Detail</button></Link>
                                    <button onClick={() => handlePopUp(item._id)} className="btn p-3 w-fit font-semibold text-black border-2 border-green-800 hover:text-white  rounded-xl hover:bg-gradient-to-r from-green-600 to-green-800">Update</button>
                                    <button onClick={() => handelDetete(item?._id)} className="btn p-3 w-fit font-semibold text-black border-2 border-red-800 hover:text-white  rounded-xl hover:bg-gradient-to-r from-red-500 to-red-600">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


            {
                popUp &&
                <div className='fixed z-50 top-0 left-0 w-full min-h-full flex items-center justify-center  bg-gray-900 bg-opacity-50'>
                    <form onSubmit={(e) => handleUpdateCourse(e, id)} className={`w-fit justify-center  flex relative flex-col  flex-wrap px-10 py-10 rounded-xl  ${dark ? 'text-white bg-[#212121]' : 'text-black bg-[#F8F5F0]'}`}>
                        <div>

                            {/* row-1 */}
                            <div className='flex items-center justify-center md:gap-5 gap-2 flex-wrap'>
                                <input disabled required className=' border-2 bg-transparent mb-5 rounded-lg md:px-10 md:py-5 px-2 py-2' type="text" name='user_name' placeholder='Your Name' defaultValue={user.displayName} />
                                <br />
                                <input disabled required className=' border-2 bg-transparent mb-5 rounded-lg md:px-10 md:py-5 px-2 py-2' type="email" name='user_email' placeholder='Your Email' defaultValue={user.email} />
                                <br />
                            </div>

                            {/* row-2 */}
                            <div className='flex items-center justify-center gap-5 flex-wrap'>
                                <input defaultValue={popUpData.image} required className=' border-2 bg-transparent mb-5  rounded-lg md:px-10 md:py-5 px-2 py-2' type="text" name='image' placeholder='Image URL' />
                                <br />
                                <input defaultValue={popUpData.Course_name} required className=' border-2 bg-transparent mb-5  rounded-lg md:px-10 md:py-5 px-2 py-2' type="text" name='Course_name' placeholder='Course Name' />
                                <br />
                            </div>

                            {/* row-3 */}
                            <div className='flex  items-center  justify-center md:gap-10 gap-5 flex-wrap'>
                                <div className='mb-2 flex flex-col  items-center gap-3'>
                                    <label className={`block  text-lg font-bold mb-2 ${dark ? 'text-white' : 'text-gray-700'}`} htmlFor="course_Area">
                                        Course Area:
                                    </label>
                                    <select defaultValue={popUpData.course_Area} required className='text-black border-2 bg-transparent mb-2  rounded-lg md:px-10 md:py-5 px-2 py-2' name='course_Area'>
                                        <option value="Business">Business</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Creativity">Creativity</option>
                                        <option value="Health & Fitness">Health & Fitness</option>
                                    </select>
                                </div>
                                <input defaultValue={popUpData.price} required className='md:mt-12 mt-0 border-2 bg-transparent md:mb-5  rounded-lg md:px-10 md:py-5 px-2 py-2' type="text" name='price' placeholder='Price' />
                            </div>
                            <textarea defaultValue={popUpData.short_des} required className='border-2 w-full mt-10 bg-transparent md:mb-2 mb-0  rounded-lg md:px-10 md:py-5 px-2 py-2' name='short_des' placeholder='Short Description' />
                            <br />
                        </div>
                        <div className='w-full flex items-center justify-center'>
                            <input className='border-2 px-6 py-3 text-white  bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl absolute bottom-[-70px]' type="submit" value="Update" />
                        </div>
                    </form>
                </div>

            }
        </div>
    )
}

export default ManageCourses