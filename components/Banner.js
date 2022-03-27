import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[700px]'>
        <Image 
            className='relative'
            src='/hero-2.jpg' 
            layout='fill' 
            objectFit='cover' 
            alt=''
        />

        <div className='bg-yellow-500 w-full absolute -bottom-5 lg:bottom-16 
            lg:right-12 lg:w-max px-2 py-1 lg:px-8 lg:py-2 text-center'>
            <h1 className='text-gray-700 text-lg font-semibold lg:text-gray-900 lg:text-3xl 
            lg:font-thin'>SAFE. PROFESSIONAL.</h1>
        </div>
        
        {/* <h1 className='absolute bottom-12 left-12
            text-lg md:text-3xl font-semibold bg-yellow-500 text-gray-800 py-2 px-8'>
            SAFE. PROFESSIONAL.
        </h1> */}
    </div>
  )
}

export default Banner