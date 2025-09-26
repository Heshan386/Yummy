 import React from 'react'
 import './Home.css'
import Navbar from '../component/Navigationbar/Navbar'
import HeroSection from '../component/Herosection/HEroSection'
import BookNow from '../component/book now/BookNow'
import Footer from '../component/footer/Footer'
import Gallery from '../component/gallery/Gallery'
 const Home = () => {
   return (
     <div id='home'>
        <Navbar/>
        <HeroSection/>
        <BookNow/>
        <Gallery/>
        <Footer/>
     </div>
   )
 }
 
 export default Home