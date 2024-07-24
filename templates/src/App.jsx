import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'
import EmailOTP from './components/EmailOTP'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'


function App() {


  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/EmailOTP" element={<EmailOTP />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
