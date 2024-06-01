

const BannerCard = () => {
  return (
    <div>BannerCard</div>
  )

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './Banner.css';

// import required modules
import { EffectCards } from 'swiper/modules';
function BannerCard() {
    return (
        <>
          <Swiper 
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="banner mySwiper"
          >
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            
          </Swiper>
        </>
      );

}

export default BannerCard