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
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={3}
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
