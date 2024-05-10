import React, { useContext } from 'react'
import { AuthContext } from '../Auth/ContextProvider'

function Popular() {
    const { dark } = useContext(AuthContext)
    return (
        <div className={` xl:px-[15vw] px-5 flex flex-col ${dark ? 'bg-[#212121] text-white' : 'bg-[#f2f2f2] text-black'}`}>
            <div className='flex md:justify-between md:items-center w-full gap-5 flex-col md:flex-row'>
                <div>
                    <h1 className='text-2xl md:text-4xl font-semibold '>Popular Course​s</h1>
                    <h3 className='mt-2 text-sm'>Limitless learning, more possibilities</h3>
                </div>
                <button className='btn p-3 w-fit font-semibold text-black border-2 border-[#E6A303] hover:text-white  rounded-xl hover:bg-gradient-to-r from-[#E6A303] to-[#876514]'>View All Course</button>
            </div>
            <div className='mt-10 flex items-center justify-center gap-10 flex-wrap'>
                <div className="relative card lg:w-96 w-80 shadow-xl">
                    <figure><img src="https://eduma.thimpress.com/wp-content/uploads/2024/03/f7aad5d3f7e5c9cf37b0c24a9d075887-1.png" alt="Shoes" /></figure>
                    <div className='absolute flex justify-center items-center flex-col w-full lg:top-[45%] top-[40%] mb-10'>
                        <div className='w-14 rounded-full'>
                            <img className='rounded-full' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                        </div>
                        <h1>Code Academy</h1>
                    </div>
                    <div className="card-body mt-10">
                        <h2 className="font-semibold lg:text-xl text-lg whitespace-nowrap">Web Development Fundamentals</h2>
                        <p className='text-sm'>Learn web development with HTML, CSS, and JavaScript. Start building websites today!</p>
                        <h3 className='my-2'>Price : <span>$110</span></h3>
                        <div className="card-actions justify-center">
                            <button className="btn p-3 w-fit font-semibold text-black border-2 border-[#E6A303] hover:text-white  rounded-xl hover:bg-gradient-to-r from-[#E6A303] to-[#876514]">View Detail</button>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Popular