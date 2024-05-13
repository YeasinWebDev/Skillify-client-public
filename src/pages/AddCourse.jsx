import React, { useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../Auth/ContextProvider';
import { Helmet } from 'react-helmet';
// import { Helmet } from "react-helmet";

function AddCourse() {
    const { user, dark } = useContext(AuthContext)

    const handleAddItem = (e) => {
        e.preventDefault()

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


        axios.post('http://localhost:8000/courses', data)
            .then(res => {
                if (res.data.insertedId) {
                    form.reset()
                    toast.success('Course Added Successfully')
                }
            })
            .catch(err => toast.error(err.massage))

    }
    return (
        <div className={`flex flex-col items-center justify-center py-20 ${dark ? 'text-white' : 'text-black'}`}>
            <Helmet>
                <title>Skillify || Add Course</title>
            </Helmet>
            <h2 className='text-4xl font-semibold mb-5 text-orange-500'><Fade cascade duration={200}>Add New Course</Fade></h2>
            <form onSubmit={handleAddItem} className='w-full justify-center gap-10 flex relative  flex-wrap'>
                <div>

                    {/* row-1 */}
                    <div className='flex items-center justify-center gap-5 flex-wrap'>
                        <input required className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='user_name' placeholder='Your Name' defaultValue={user.displayName} />
                        <br />
                        <input required className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="email" name='user_email' placeholder='Your Email' defaultValue={user.email} />
                        <br />
                    </div>

                    {/* row-2 */}
                    <div className='flex items-center justify-center gap-5 flex-wrap'>
                        <input required className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='image' placeholder='Image URL' />
                        <br />
                        <input required className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='Course_name' placeholder='Course Name' />
                        <br />
                    </div>

                    {/* row-3 */}
                    <div className='flex  items-center  justify-center md:gap-10 gap-5 flex-wrap'>
                        <div className='mb-2 flex flex-col  items-center gap-3'>
                            <label className={`block  text-lg font-bold mb-2 ${dark ? 'text-white' : 'text-gray-700'}`} htmlFor="course_Area">
                                Course Area:
                            </label>
                            <select required className='text-black border-2 bg-transparent mb-2 p-2 rounded-lg px-10 py-5' name='course_Area'>
                                <option value="Business">Business</option>
                                <option value="Technology">Technology</option>
                                <option value="Creativity">Creativity</option>
                                <option value="HealthFitness">Health & Fitness</option>
                            </select>
                        </div>
                        <input required className='md:mt-12 mt-0 border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='price' placeholder='Price' />
                    </div>
                    <textarea required className='border-2 w-full mt-10 bg-transparent mb-2 p-2 rounded-lg px-10 py-5' name='short_des' placeholder='Short Description' />
                    <br />
                </div>
                <input className=' border-2 px-6 py-3 bg-transparent rounded-xl absolute bottom-[-70px]' type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddCourse