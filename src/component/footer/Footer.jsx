import React from 'react'
import './Footer.css'
import pin from '../../assets/pin.png'
import call from '../../assets/call.png'
import clock from '../../assets/clock .png'
import fb from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import inst from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
  return (
    <div className='mainfooter'>
        <div className="footerContent">
            <div className="contactFooter">
                <div className="address">
                    <div className="locationIconFooter">
                        <img src={pin} alt="" />
                    </div>
                    <div className="addressContent">
                        <h4>Address</h4>
                        <span>A108 Adam Street</span>
                        <span>New York, NY 535022</span>
                    </div>
                </div>
                <div className="address">
                    <div className="locationIconFooter">
                        <img src={call} alt="" />
                    </div>
                    <div className="addressContent">
                        <h4>Contact</h4>
                        <div className="phone">
                            <h5>Phone:</h5>
                            <span> +1 5589 55488 55</span>
                        </div>
                        <div className="email">
                            <h5>Email:</h5>
                            <span> info@example.com</span>
                        </div>
                    </div>
                </div>
                <div className="address">
                    <div className="locationIconFooter">
                        <img src={clock} alt="" />
                    </div>
                    <div className="addressContent">
                        <h4>Opening Hours</h4>
                            <div className="phone">
                                <h5>Mon-Sat:</h5>
                                <span> A108 Adam Street</span>
                            </div>
                            <div className="email">
                                <h5>Sunday:</h5>
                                <span> Closed</span>
                            </div>
                        
                    </div>
                </div>
                <div className="followUS">
                    <h4>Follow Us</h4>
                    <div className="socialIcon">
                        <img src={fb} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={twitter} alt="" />
                        <img src={inst} alt="" />
                    </div>
                </div>
            </div> 
                <div className="copyRight">
                    <p>©</p>
                    <span>Copyright</span>
                    <h4>Yummy</h4>
                    <span>All Rights Reserved</span>
                </div>
                <div className="desingBy">
                    <p>Designed by</p>
                    <span>B8 Studio</span>
                </div>   
        </div>
    </div>
  )
}

export default Footer