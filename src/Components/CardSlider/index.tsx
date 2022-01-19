import "swiper/css";
import MainCard from "../Elements/Card/MainCard";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import {Container}  from "./style";

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
        breakpoints={{
          // when window width is >= 640px
          1: {
            // width: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0

          },
          // when window width is >= 768px
          500: {
            // width: 767,
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10

          },
          767: {
            // width: 1200,
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
          },
        }}
        // spaceBetween={30}
        // slidesPerView={3}
        // slidesPerGroup={3}
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
