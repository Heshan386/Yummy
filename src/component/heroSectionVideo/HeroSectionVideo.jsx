import React from 'react'
import ReactPlayer from "react-player";
import './HeroSectionVideo.css'
const HeroSectionVideo = ({onClose}) => {
  return (
    <div onClick={onClose} className="mainHVideo">
            <div className='mainHeroVideocontainer'>
                <ReactPlayer src='https://youtu.be/ZanweKTLHP0?si=1IQmwMJskJDH0L23'
                    width="880px"
                    height="500px"
                    controls={true}
                    playing={true}

                />
            </div>
        </div>
  )
}

export default HeroSectionVideo