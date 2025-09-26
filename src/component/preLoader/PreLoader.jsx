import React from 'react'
import './PreLoader.css'
import preLoader from '../../assets/preloder.gif'
const PreLoader = () => {
  return (
    <div className='preLoader-container'>
        <div className="preLoader-icon">
            <img src={preLoader} alt="" />
        </div>
    </div>
  )
}

export default PreLoader