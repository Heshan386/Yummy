import React from 'react'
import './BookNow.css'
import booknowimg from '../../assets/reservation.jpg'
const BookNow = () => {
  return (
    <div className='bookNowMain' id='booknow'>
        <span>BOOK A TABLE</span>
        <div className="heding">
            <h1>Book Your</h1>
            <h1 className='h1Red'>Stay With Us</h1>
        </div>
        <div className="bookNowSection">
            <div className="booknowimg">
                <img src={booknowimg} alt="" />
            </div>
            <div className="bookNowFrom">
                <div className="firstRow">
                    <input className='fRowItem' type="text" placeholder='Your Name' required="" />
                    <input className='fRowItem' type="text" placeholder='Your Email' required="" />
                    <input className='fRowItem' type="text" placeholder='Your Phone' required="" />
                </div>
                <div className="secondRow">
                    <input className='fRowItem' type="date" name="" id="" required="" />
                    <input className='fRowItem' type="time" name="" id="" required="" />
                    <input className='fRowItem' type="number" name="" id="" placeholder='# of people' required="" />
                </div>
                <textarea placeholder='Message' name="" id=""></textarea><br />
                <button>Book a Table</button>
            </div>
        </div>
    </div>
  )
}

export default BookNow