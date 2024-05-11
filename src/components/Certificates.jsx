import React from 'react'

function Certificates() {
    return (
        <div className='flex flex-col items-center justify-center py-10'>
            <h1 className='md:text-5xl font-semibold text-3xl'>Explore Certificates</h1>
            <div className='pt-10'>
                <div className='flex gap-5 items-center flex-wrap'>
                    <div className='flex items-center flex-col gap-2 md:p-0 p-3'>
                        <img  className='md:w-[20vw] w-full rounded-xl' src="https://i.ibb.co/sRn3Ltr/certificates-1.webp" alt="" />
                        <h1 className='text-2xl font-semibold'>Web development</h1>
                    </div>
                    <div className='flex items-center flex-col gap-2 md:p-0 p-3'>
                        <img  className='md:w-[20vw] w-full rounded-xl' src="https://i.ibb.co/QNgh9gY/certificates-2.webp" alt="" />
                        <h1 className='text-2xl font-semibold'>Digital Marketing</h1>
                    </div>
                    <div className='flex items-center flex-col gap-2 md:p-0 p-3'>
                        <img className='md:w-[20vw] w-full rounded-xl'  src="https://i.ibb.co/269JtHW/certificates-3.webp" alt="" />
                        <h1 className='text-2xl font-semibold'>Health & Fitness</h1>
                    </div>
                    <div className='flex items-center flex-col gap-2 md:p-0 p-3'>
                        <img className='md:w-[20vw] w-full rounded-xl'  src="https://i.ibb.co/h7w01b6/certificates-4.webp" alt="" />
                        <h1 className='text-2xl font-semibold'>Data Analytics</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificates