import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './Components/navbar'
import { Provider } from 'react-redux'
import store from './Store/store'
export default function App({ Component, pageProps }) {

  return(

    <ChakraProvider>
     <Provider store={store}>
      <Navbar/>
      <Component {...pageProps} />

     </Provider>

    </ChakraProvider>

  ) 
}
