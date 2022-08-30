import Image from "next/image";
import React, { useState } from "react";
import { useFetch } from "../context/imageContext";

export default function Modal({ imageUrl }) {
    const { changeImage, image } = useFetch(state => state)

    console.log(image);

  return (
    <div className="relative">
        <div
        className="px-6 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none"
        >
        <div className="relative my-6 mx-auto max-w-3xl w-3/4 h-1/2 bg-white">
            <div 
                onClick={() => changeImage(null)}
                className="absolute top-2 right-2 z-50 cursor-pointer rounded-full bg-gray-50 w-10 h-10 text-gray-500 text-3xl
                flex justify-center items-center hover:bg-gray-100 hover:text-gray-600 transition duration-150">X</div>
            <div className="relative h-full w-full">
                <Image src={image} alt='' layout="fill" objectFit="cover" />
            </div>
            
        </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-30 bg-black "></div>
    </div>
  );
}