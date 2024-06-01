// import React from 'react'
import { Outlet } from "react-router-dom"
// import { Navbar } from "rsuite"
import Navbar from "./components/Navbar.jsx"
import MyFooter from "./components/Myfooter.jsx"

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/> 
    <MyFooter/> 
    </>
  )
}

export default App