import '../styles/globals.css'

import ImageProvider from '../context/imageContext'

function MyApp({ Component, pageProps }) {
  return <ImageProvider>
    <Component {...pageProps} />
  </ImageProvider>
}

export default MyApp
