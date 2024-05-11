import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { PiCertificateDuotone } from "react-icons/pi";

function DataSection() {
    const [isVisible, setIsVisible] = useState(false);

    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
            setIsVisible(true);
        }
    };

    return (
        <div className='py-10 text-white'>
            <div className='absolute z-10 h-[38vh]  w-full flex items-center justify-center gap-10 flex-wrap p-2 md:p-0'>
                <div className='flex flex-col md:gap-3 gap-2 items-center justify-center md:border-r-2 border-dashed  md:pr-10 pr-0'>
                    <FaPeopleGroup size={35}/>
                    <VisibilitySensor onChange={onVisibilityChange}>
                        <CountUp className='text-orange-400 font-semibold md:text-2xl text-xl' end={isVisible ? 4544 : 0} />
                    </VisibilitySensor>
                    <h1 className='md:text-xl text-lg'>Foreign Student</h1>
                </div>
                <div className='flex flex-col md:gap-3 gap-2 items-center justify-center md:border-r-2 border-dashed  md:pr-10 pr-0'>
                    <FaChalkboardTeacher size={35}/>
                    <VisibilitySensor onChange={onVisibilityChange}>
                        <CountUp className='text-orange-400 font-semibold md:text-2xl text-xl' end={isVisible ? 225 : 0} />
                    </VisibilitySensor>
                    <h1 className='md:text-xl text-lg'>Classes Complete</h1>
                </div>
                <div className='flex flex-col md:gap-3 gap-2 items-center justify-center md:border-r-2 border-dashed  md:pr-10 pr-0'>
                    <PiStudentBold size={35}/>
                    <VisibilitySensor onChange={onVisibilityChange}>
                        <CountUp className='text-orange-400 font-semibold md:text-2xl text-xl' end={isVisible ? 25240 : 0} />
                    </VisibilitySensor>
                    <h1 className='md:text-xl text-lg'>Students Enrolled</h1>
                </div>
                <div className='flex flex-col md:gap-3 gap-2 items-center justify-center'>
                    <PiCertificateDuotone size={35}/>
                    <VisibilitySensor onChange={onVisibilityChange}>
                        <CountUp className='text-orange-400 font-semibold md:text-2xl text-xl' end={isVisible ? 120 : 0} />
                    </VisibilitySensor>
                    <h1 className='md:text-xl text-lg'>Certified Teachers</h1>
                </div>
            </div>
            <div className='absolute w-full h-[35vh]  brightness-50'>
                <img className='w-full h-full object-cover ' src="https://i.ibb.co/xXLRgZ4/dataImg.jpg" alt="" />
            </div>
        </div>
    );
}

export default DataSection;
