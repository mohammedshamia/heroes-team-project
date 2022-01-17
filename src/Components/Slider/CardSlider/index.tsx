// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import MainCard from "../../Elements/Card/MainCard";
import "swiper/css/pagination";
import { Container } from "./style";
// SwiperCore.use([Navigation, Pagination]);

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export const CardSlider = () => {
  const slides = [];
  for (let i = 0; i < 6; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <MainCard
          title={"phone"}
          price={364}
          imgUrl={`https://picsum.photos/id/${i + 1}/500/300`}
        />
      </SwiperSlide>
    );
  }

  return (
    <Container>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {slides}
      </Swiper>
    </Container>
  );
};
