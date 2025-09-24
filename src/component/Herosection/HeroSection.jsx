import React from 'react'
import './HeroSection.css'
import heroImg from '../../assets/hero-img.png'
import palyicon from '../../assets/paly-icon.png'
const HeroSection = () => {
  return (
    <div className='mainHero'>
        <div className="heroText">
            <h1>Enjoy Your Healthy</h1>
            <h1>Delicious Food</h1>
            <h4>We are team of talented designers making websites with <br /> Bootstrap</h4>
            <div className="heroButton">
                <button>Book a Table</button>
                <div className="watchVideo">
                    <img src={palyicon} alt="" />
                    <h5>Watch Video</h5>
                </div>
            </div>
        </div>
        <div className="heroImg">
            <img src={heroImg} alt="" />
        </div>
    </div>
  )
}

export default HeroSection