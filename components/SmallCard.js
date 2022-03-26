import Image from 'next/image'
import React from 'react'

import { ShieldCheckIcon } from '@heroicons/react/outline'

const SmallCard = ({service}) => {
  return (
    <div className='flex flex-col mt-5'>
        <div>
            <ShieldCheckIcon className='h-10 text-blue-700' />
            <h1 className='text-blue-700 font-semibold text-lg'>{service.title}</h1>
        </div>

        <p className='text-gray-500'>{service.desc}</p>
        {/* <div className='relative h-16 w-16'>
            <Image className='rounded-lg' src={img} layout='fill' alt='' />
        </div>

        <div>
            <h2 className='font-semibold text-gray-600'>{location}</h2>
            <h3 className='text-gray-500'>{distance}</h3>
        </div> */}
    </div>
  )
}

export default SmallCard

// const SmallCard = ({ img, location, distance }) => {
//   return (
//     <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
//             hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out
//         '>
//         <div className='relative h-16 w-16'>
//             <Image className='rounded-lg' src={img} layout='fill' alt='' />
//         </div>

//         <div>
//             <h2 className='font-semibold text-gray-600'>{location}</h2>
//             <h3 className='text-gray-500'>{distance}</h3>
//         </div>
//     </div>
//   )
// }

// export default SmallCard