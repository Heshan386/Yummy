import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

const [nav,setNav]= useState("");

  return (
    <div className='mainNav'>
        <h1>Yummy.</h1>
            <ul>
                <li onClick={()=>setNav("home")} className={nav==="home"?"active":""}>Home</li>
                <li onClick={()=>setNav("about")} className={nav==="about"?"active":""}>About</li>
                <li onClick={()=>setNav("menu")} className={nav==="menu"?"active":""}>Menu</li>
                <li onClick={()=>setNav("event")} className={nav==="event"?"active":""}>Event</li>
                <li onClick={()=>setNav("chefs")} className={nav==="chefs"?"active":""}>Chefs</li>
                <li onClick={()=>setNav("gallery")} className={nav==="gallery"?"active":""}>Gallery</li>
                <li onClick={()=>setNav("contact")} className={nav==="contact"?"active":""}>Contact</li>
            </ul>
        <a href="#booknow"><button>Book a Table</button></a>
    </div>
  )
}

export default Navbar