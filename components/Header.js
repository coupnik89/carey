import Image from 'next/image'
import React from 'react'

import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline'

function Header() {
   
  return (
    <div className='shadow-sm border-b-2 border-yellow-500 bg-gray-900 sticky top-0 z-50'>
        <div className='flex items-center justify-center py-3'>
            {/* <h1 className='text-white'>HELLO</h1> */}
            <div className='relative hidden md:inline-flex w-44 h-16 cursor-pointer'>
                <Image 
                    src='/logo-lg-white.png' 
                    layout='fill' 
                    objectFit='contain' 
                    alt=''
                    onClick={() => router.push('/')}/>
            </div>

            <div className='relative h-16 w-16 md:hidden flex-shrink-0 cursor-pointer'>
                <Image 
                    src='/logo-white.png' 
                    layout='fill' 
                    objectFit='contain' 
                    alt=''
                    onClick={() => router.push('/')}/>
            </div>

            &nbsp;
        </div>
    </div>
  )
}

export default Header