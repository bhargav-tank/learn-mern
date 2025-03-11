import { Box } from "@chakra-ui/react"
import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import CreatePage from "./components/pages/CreatePage"
import NavBar from "./components/Navbar/Index"
import { useColorModeValue } from "./components/ui/color-mode"


function App() {

  return (
    <>
      <Box minH={'100vh'} bg={useColorModeValue("gray.100", "gray.900")}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path='/create' element={<CreatePage />}></Route>
        </Routes>
      </Box>
    </>
  )
}

export default App
