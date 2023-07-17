import React from 'react'
import "./Home.css"
import img from "../../assets/cppLogo.png"
import Content from "./Content"
import FAQs from './Faq'
import Navbar from '../Navbar/Navbar'
import Image from './Image'
import Footer from './Footer'
import Content1 from './Content copy'
const HomePage = () => {
    return (
       <>
       <Navbar/>
       <Image/>
        <Content/>
      
     
      <Image/>
      <Content1/>
    
      
      
   
      <FAQs/>
      <Footer/>
       </>
    )
}

export default HomePage
