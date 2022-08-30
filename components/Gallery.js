import React from 'react'

import Image from 'next/image'

import { useFetch } from '../context/imageContext'
import Modal from './Modal'

const Gallery = ({ images }) => {
  const { changeImage, image } = useFetch(state => state)

  return (
    <>
      {image ? <Modal /> : null}
      <div className='my-10 py-10 max-w-7xl mx-auto px-8 sm:px-16'>
          <div className='flex gap-4 flex-wrap justify-between'>
              {images.map(image => (
                <div onClick={() => changeImage(image.image.asset.url)} key={image._id} 
                className='relative w-40 h-40 md:w-64 md:h-64 cursor-pointer'>
                    <Image 
                      src={image?.image.asset.url} 
                      layout='fill' 
                      objectFit='cover' 
                      alt='' />
                </div>
              ))}
          </div>
      </div>
    </>
  )
}

export default Gallery