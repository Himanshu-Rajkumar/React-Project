import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Service from '../Pages/Service'
import About from '../Pages/About'
import Header from './Header'
import Footer from './Footer'
import SingleUser from '../Pages/SingleUser'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import Error from './Error'
import GoToTop from './GoToTop'






const AllRouters = () => {
  
  const theme={
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "750px", tab: "998px" },
  }
 
  return (
    <div>
      <ThemeProvider theme={theme} >
      <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/users/:service_id" element={<SingleUser />}></Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='*' element={<Error/>} />
        </Routes>
        <GoToTop/>
        <Footer />
        
      </ThemeProvider>



    </div>
  )
}

export default AllRouters
