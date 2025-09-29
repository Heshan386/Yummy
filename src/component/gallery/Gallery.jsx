import React from 'react'
import './Gallery.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules';
import 'swiper/css';
import gallery1 from '../../assets/gallery/gallery-1.jpg'
import gallery2 from '../../assets/gallery/gallery-2.jpg'
import gallery3 from '../../assets/gallery/gallery-3.jpg'
import gallery4 from '../../assets/gallery/gallery-4.jpg'
import gallery5 from '../../assets/gallery/gallery-5.jpg'
import gallery6 from '../../assets/gallery/gallery-6.jpg'
import gallery7 from '../../assets/gallery/gallery-7.jpg'
import gallery8 from '../../assets/gallery/gallery-8.jpg'
const Gallery = () => {
  return (
    <div className='mainGallery' id='gallery'>
        <span>GALLERY</span>
        <div className="galleryHeding">
            <h1>CHECK</h1>
            <h1 className='redGallery'>OUR GALLERY</h1>
        </div>
          <div className='galleryImage'>
            <Swiper
            modules={[Autoplay]}
            spaceBetween={5}
            slidesPerView={4}
            loop={true}
            autoplay={{delay:2000}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
              <div className="galleryImg">
                <img src={gallery1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="galleryImg">
                <img src={gallery2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="galleryImg">
                <img src={gallery3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="galleryImg">
                <img src={gallery4} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="galleryImg">
                <img src={gallery5} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="galleryImg">
                <img src={gallery6} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="galleryImg">
                <img src={gallery7} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="galleryImg">
                <img src={gallery8} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
    </div>
    </div>
  )
}

export default Gallery