import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function AdSection(props) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={props.image1} alt='Slider1' width={1000}></img></SwiperSlide>
        <SwiperSlide><img src={props.image2} alt='Slider2'  width={100}></img></SwiperSlide>
        <SwiperSlide><img src={props.image3} alt='Slider3'  width={100}></img></SwiperSlide>
      </Swiper>
    </>
  );
}
