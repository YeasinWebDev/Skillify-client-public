import React, { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Helmet } from 'react-helmet'
import { AuthContext } from '../Auth/ContextProvider'
import axios from 'axios'
import toast from 'react-hot-toast'

function CourseToDo() {
    const { dark, user } = useContext(AuthContext)
    const [data, setData] = useState([])
    const [status, setStatus] = useState({});
    
    useEffect(() => {
        axios.get(`https://a11-server-phi.vercel.app/coursesByEmail?email=${user.email}`,{withCredentials: true})
            .then(res => {
                setData(res.data)
            })
    }, [])

    useEffect(() => {
        const storedStatus = JSON.parse(localStorage.getItem('courseStatus')) || {};
        setStatus(storedStatus);
    }, []);

    const handleStatusChange = (e, name) => {
        const updatedStatus = { ...status, [name]: e };
        setStatus(updatedStatus);
        localStorage.setItem('courseStatus', JSON.stringify(updatedStatus));

        // PUT request to update the status
        axios.patch(`https://a11-server-phi.vercel.app/UpdateStatus?name=${name}`, { status: e })
            .then(res => {
                // Handle success if needed
                toast.success('Status Updated')
            })
            .catch(error => {
                // Handle error if needed
                console.log(error)
            });
    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>Skillify || Courses To Do</title>
            </Helmet>
            <h2 className='flex items-center justify-center py-10 text-4xl font-semibold mb-5 text-orange-500'>
                <Fade cascade duration={200}>Courses To Do</Fade>
            </h2>
            <div className='lg:mx-20 flex items-center justify-center'>
                <div className="overflow-x-auto w-full">
                    <table className={`table text-xl ${dark ? "border-[#f2f2f2] text-white" : "border-[#1A1818]"}`}>
                        <thead>
                            <tr className={` text-xl ${dark ? 'text-white border-b-[#f2f2f2]' : ' text-black border-b-[#1A1818]'}`}>
                                <th></th>
                                <th>Name</th>
                                <th>Des</th>
                                <th>Area</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, i) => (
                                <tr key={item._id} className={`${dark ? 'text-white border-b-[#f2f2f2]' : ' text-black border-b-[#1A1818]'}`}>
                                    <th>{i + 1}</th>
                                    <td>{item.Course_name}</td>
                                    <td>{item.short_des.slice(0, 30)}.... </td>
                                    <td>{item.course_Area}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <select
                                            className={`text-black border-2 bg-transparent rounded-lg px-6 py-3`}
                                            name='Course_Status'
                                            onChange={(e) => handleStatusChange(e.target.value, item.Course_name)}
                                            value={status[item.Course_name] || ''}
                                        >
                                            <option value="pending">pending</option>
                                            <option value="working">working</option>
                                            <option value="completed">completed</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CourseToDo
