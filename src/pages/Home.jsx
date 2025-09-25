 import React from 'react'
 import './Home.css'
import Navbar from '../component/Navigationbar/Navbar'
import HeroSection from '../component/Herosection/HEroSection'
import BookNow from '../component/book now/BookNow'
import Footer from '../component/footer/Footer'
 const Home = () => {
   return (
     <div id='home'>
        <Navbar/>
        <HeroSection/>
        <BookNow/>
        <Footer/>
     </div>
   )
 }
 
 export default Home