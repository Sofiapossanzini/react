import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}


import NavBar from "./components/NavBar.jsx"

const titulo = "CASA CHULA"



const App = () => {
  return (
    <>
    < NavBar
      titulo = {titulo}

    />
  </>
   
   )
  }

export default App

