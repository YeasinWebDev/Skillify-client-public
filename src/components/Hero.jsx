import React, { useContext } from 'react';
import benar from '../img/banner.webp';
import { IoIosPeople } from "react-icons/io";
import { BsJournalBookmark } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { AuthContext } from '../Auth/ContextProvider'
import { Link } from 'react-router-dom';

function Hero() {
    const { dark } = useContext(AuthContext)
    return (
        <div className={`relative lg:h-[80vh] h-[60vh] ${dark ? 'bg-[#212121] text-white' : 'bg-[#f2f2f2] text-black'}`}>
            {/* Second div */}
            <div className='absolute inset-0 h-full text-white flex items-center flex-col  justify-center  z-10'>
                <h1 className='lg:text-6xl md:text-4xl text-3xl font-semibold'>ONLINE COURSES TO LEARN</h1>
                <h3 className='lg:text-3xl md:text-xl text-lg py-3'>Own your future learning new skills online</h3>
                <div className='flex justify-center items-center lg:gap-6 gap-2 flex-col lg:flex-row my-3'>
                    <h3 className='flex items-center gap-2'><IoIosPeople size={25} /> Over 7 million students</h3>
                    <h3 className='flex items-center gap-2'><BsJournalBookmark size={25} /> More than 30,000 courses.</h3>
                    <h3 className='flex items-center gap-2'><IoLocationOutline size={25} /> Learn anything online.</h3>
                </div>
                <Link to={'/allCourses'}>
                    <button className="my-5 p-3 font-semibold text-white rounded-xl bg-gradient-to-r from-[#E6A303] to-[#876514]">All Course</button>
                </Link>
            </div>
            {/* Image div */}
            <div className='absolute h-[50vh] lg:h-fit  brightness-50 '>
                <img className='object-cover w-full h-full' src={benar} alt="" />
            </div>
        </div>
    );
}

export default Hero;
