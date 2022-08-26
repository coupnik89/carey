import React from 'react'
import Image from 'next/image'

const Photo = ({ img }) => {
  return (
    <div className='relative w-40 h-40 md:w-64 md:h-64'>
        {/* <p className='text-red-500 text-2xl'>{img}</p> */}
        <Image 
            src={`/img/${img}`} 
            layout='fill' 
            objectFit='cover' 
            alt='' />
    </div>
  )
}

export default Photo