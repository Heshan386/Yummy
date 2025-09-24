import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='mainNav'>
        <h1>Yummy.</h1>
        <div className="navList">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Event</li>
                <li>Chefs</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
        </div>
        <button>Book a Table</button>
    </div>
  )
}

export default Navbar