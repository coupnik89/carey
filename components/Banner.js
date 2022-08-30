import React, { useState, useRef, useEffect } from 'react'

import ReactPlayer from 'react-player'

import axios from 'axios'
import { client } from '../utils/client'
import Link from 'next/link'

import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi'
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'

function Banner({ video }) {
  const [isHover, setisHover] = useState(false)
  const [playing, setplaying] = useState(false)
  const [isVideoMuted, setisVideoMuted] = useState(false)

  const videoRef = useRef(null)

  const videoPress = () => {
        if(playing) {
            videoRef?.current?.pause()
            setplaying(false)
        } else {
            videoRef?.current?.play()
            setplaying(true)
        }
    }

  return (
    <div className='mb-10 lg:mb-16 relative'>
        {/* <div className='w-full h-full'>
          <ReactPlayer
            width='100%' 
            height='100%'
            controls
            url='https://www.youtube.com/watch?v=6HMVQAelTuA' />
        </div> */}
          <div 
            onMouseEnter={() => setisHover(true)}
            onMouseLeave={() => setisHover(false)} 
            className=''>
            <video
                ref={videoRef}
                src={video?.video.asset.url}
                loop
                className=''>        
            </video>

            {isHover && (
                <div className='cursor-pointer flex gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    {playing ? (
                        <button onClick={videoPress} className='bg-gray-300 p-3 rounded-full'>
                            <BsFillPauseFill className='text-gray-700 text-2xl lg:text-4xl'/>
                        </button>
                    ) : (
                        <button onClick={videoPress} className='bg-gray-300 p-3 rounded-full'>
                            <BsFillPlayFill className='text-gray-700 text-2xl lg:text-4xl'/>
                        </button>
                    )}
                    {/* {isVideoMuted ? (
                        <button onClick={() => setisVideoMuted(false)} className='bg-gray-300 p-3 rounded-full'>
                            <HiVolumeOff className='text-gray-700 text-2xl lg:text-4xl'/>
                        </button>
                    ) : (
                        <button onClick={() => setisVideoMuted(true)} className='bg-gray-300 p-3 rounded-full'>
                            <HiVolumeUp className='text-gray-700 text-2xl lg:text-4xl'/>
                        </button>
                    )} */}
                </div>
                )}
            </div>
        </div>
  )
}

export default Banner