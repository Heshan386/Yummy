 import React from 'react'
 import './Home.css'
import Navbar from '../component/Navigationbar/Navbar'
import HeroSection from '../component/Herosection/HEroSection'
import BookNow from '../component/book now/BookNow'
 const Home = () => {
   return (
     <div>
        <Navbar/>
        <HeroSection/>
        <BookNow/>
     </div>
   )
 }
 
 export default Home