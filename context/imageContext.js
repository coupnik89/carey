import { createContext, useContext, useEffect, useState } from 'react'

const ImageContext = createContext({})

export const useFetch = () => useContext(ImageContext)

const ImageProvider = ({ children }) => {
    const [image, setimage] = useState(null)

    const changeImage = (url) => {
        setimage(url)
        console.log(url);
    }

  return (
    <ImageContext.Provider value={{ image, changeImage }}>
        { children }
    </ImageContext.Provider>
  )
}

export default ImageProvider