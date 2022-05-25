import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import NBA from '../../img/nbafinalposter.jpeg'
import Chatbot from '../../img/chatbotawsfinalposter.png'
import FIBS from '../../img/flighinsurancefinalposter.png'
import MRS from '../../img/mrsfinalposter.png'
import RTOD from '../../img/objectdetectionfinalposter.png'
import DV from '../../img/rentacrossusfinalposter.png'
import 'swiper/css'

const Portfolio = () => {
  return (
      <div className="portfolio" id='Portfolio'>
          <span>Recent Projects</span>
          <span>Portfolio</span>
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'>
          <SwiperSlide>
              <img src={RTOD} alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img src={Chatbot} alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img src={FIBS} alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img src={MRS} alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img src={NBA} alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img src={DV} alt="" />
          </SwiperSlide>
      </Swiper>

      </div>
  )
}

export default Portfolio