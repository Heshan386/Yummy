import React, { useState } from 'react'
import './HeroSection.css'
import heroImg from '../../assets/hero-img.png'
import palyicon from '../../assets/paly-icon.png'
import { Link } from 'react-scroll'
import HeroSectionVideo from '../heroSectionVideo/HeroSectionVideo'

const HeroSection = () => {

    const [openHerovideo,setopenHerovideo]= useState(false)


  return (
    <div className='mainHero'>
        <div className="heroText">
            <h1>Enjoy Your Healthy</h1>
            <h1>Delicious Food</h1>
            <h4>We are team of talented designers making websites with Bootstrap</h4>
            <div className="heroButton">
                <Link to='booknow' smooth='true'><button>Book a Table</button></Link>
                <div className="watchVideo">
                    <img src={palyicon} alt="" />
                    <h5 onClick={()=> setopenHerovideo(true)}>Watch Video</h5>
                </div>
            </div>
        </div>
        <div className="heroImg">
            <img src={heroImg} alt="" />
        </div>
        { openHerovideo && <HeroSectionVideo onClose={()=>setopenHerovideo(false)} />}
    </div>
  )
}

export default HeroSection