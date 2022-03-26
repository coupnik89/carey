import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[700px]'>
        <Image 
            src='/hero.jpg' 
            layout='fill' 
            objectFit='cover' 
            alt=''
        />
        <div className='absolute top-1/2 w-full text-center'>
            <h1 className='text-3xl font-semibold text-white underline underline-offset-8'>
                YOUR SAFETY, IN OUR HANDS
            </h1>

            {/* <button className='text-purple-500 bg-white 
                py-2 px-6 sm:py-4 sm:px-10 shadow-md rounded-full font-bold my-3
                hover:shadow-lg hover:-translate-y-1 active:shadow-md active:scale-90 transition duration-150
                '>I&apos;m flexible</button> */}
        </div>
    </div>
  )
}

export default Banner