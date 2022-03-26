import React from 'react'

import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import Image from 'next/image'

function Footer() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-10 
        px-24 py-14 bg-gray-900 text-gray-600'>
        <div className='text-gray-200'>
            <h5 className='font-bold text-lg mb-2 text-yellow-500'>Contact</h5>
            <div className='flex flex-col space-y-1'>
                <div className='flex space-x-2'>
                    <MailIcon className='h-6' />
                    <p>careypatrol@gmail.com</p>
                </div>
                <div className='flex space-x-2'>
                    <PhoneIcon className='h-6' />
                    <p>(213)-929-0119</p>
                </div>
                <div className='flex space-x-2'>
                    <div className='relative h-6 w-6'>
                        <Image src='/instagram-white.png' layout='fill' objectFit='cover' alt=''/>
                    </div>
                    <p>CareyPatrol</p>
                </div>
            </div>
        </div>
        
        <div className='text-gray-200'>
            <h5 className='font-bold text-yellow-500 text-lg mb-2'>Services</h5>
            <div>
                <p>Armed Guards</p>
                <p>Unarmed Guard</p>
                <p>Vehicle Patrol</p>
                <p>Body Guards</p>
            </div>
        </div>
    </div>
  )
}

export default Footer