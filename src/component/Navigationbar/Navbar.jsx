import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {

const [nav,setNav]= useState("");

  return (
    <div className='mainNav'>
        <h1>Yummy.</h1>
            <ul>
                <a href="#home"><li onClick={()=>setNav("home")} className={nav==="home"?"active":""}>Home</li></a>
                <li onClick={()=>setNav("about")} className={nav==="about"?"active":""}>About</li>
                <li onClick={()=>setNav("menu")} className={nav==="menu"?"active":""}>Menu</li>
                <li onClick={()=>setNav("event")} className={nav==="event"?"active":""}>Event</li>
                <li onClick={()=>setNav("chefs")} className={nav==="chefs"?"active":""}>Chefs</li>
               <Link to='gallery' smooth='true'><li onClick={()=>setNav("gallery")} className={nav==="gallery"?"active":""}>Gallery</li></Link> 
                <li onClick={()=>setNav("contact")} className={nav==="contact"?"active":""}>Contact</li>
            </ul>
       <Link to='booknow' smooth='true'><button>Book a Table</button></Link> 
    </div>
  )
}

export default Navbar