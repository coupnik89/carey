import React from 'react'

import { imgs } from '../data'
import Photo from './Image'

const Gallery = () => {
  return (
    <div className='my-10 border-t-[1px] border-gray-500 py-10'>
        <div className='flex gap-4 flex-wrap justify-between'>
            {imgs.map(img => (<Photo key={img} img={img} />))}
        </div>
    </div>
  )
}

export default Gallery