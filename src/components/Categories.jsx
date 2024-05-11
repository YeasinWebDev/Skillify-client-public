import React, { useContext } from 'react'
import { MdWork } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoFitness } from "react-icons/io5";
import { AuthContext } from '../Auth/ContextProvider';

function Categories() {
    const {dark} = useContext(AuthContext)
  return (
    <div className='flex flex-col items-center justify-center py-10'>
        <h1 className='md:text-5xl font-semibold text-3xl'>Top Categories</h1>
        <div className='pt-10 flex gap-3 flex-wrap'>
            <div className={`border-2 p-5 rounded-xl hover:text-orange-500 hover:border-orange-500 cursor-pointer flex items-center gap-3`}>
                <MdWork size={28}/>
                <h1 className={`md:text-2xl text-xl`}>Business</h1>
            </div>
            <div className={`border-2 p-5 rounded-xl hover:text-orange-500 hover:border-orange-500 cursor-pointer flex items-center gap-3`}>
                <FaCode size={28}/>
                <h1 className={`md:text-2xl text-xl`}>Technology</h1>
            </div>
            <div className={`border-2 p-5 rounded-xl hover:text-orange-500 hover:border-orange-500 cursor-pointer flex items-center gap-3`}>
                <MdOutlineDesignServices size={28}/>
                <h1 className={`md:text-2xl text-xl`}>Creativity</h1>
            </div>
            <div className={`border-2 p-5 rounded-xl hover:text-orange-500 hover:border-orange-500 cursor-pointer flex items-center gap-3`}>
                <IoFitness size={28}/>
                <h1 className={`md:text-2xl text-xl`}>Health & Fitness</h1>
            </div>
        </div>
    </div>
  )
}

export default Categories