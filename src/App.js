import React from 'react'
import{BrowserRouter,Route,Routes} from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './Component/Home'
import Faq from './Component/Faq'
import Footer from './Screeen/Footer'
import Nav from './Screeen/Nav'
import ContactUs from './Component/ContactUs'
import ReadMoreIntroduction from './Component/ReadMoreIntroduction'

const App = () => {
  return (
  <>
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/faq' element={<Faq/>}></Route>
    <Route path='/contact' element={<ContactUs/>}></Route>
    <Route path='/readmore' element={<ReadMoreIntroduction/>}></Route>



  </Routes>
  <Footer/>

  </BrowserRouter>
  </>

  )
}

export default App



