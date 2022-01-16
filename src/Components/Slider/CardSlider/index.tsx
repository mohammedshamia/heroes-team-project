import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import MainCard from '../../Elements/Card/MainCard'
import "swiper/css/pagination"
import { Container } from './style';
SwiperCore.use([Navigation, Pagination]);

export const CardSlider = () => {

  const slides = [];
  for (let i = 0; i < 6; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" >
        <MainCard title={"phone"} price={364} imgUrl={`https://picsum.photos/id/${i + 1}/500/300`} />
      </SwiperSlide>
    )
  }

  return (
    <Container>
      <Swiper
        id="thumbs"
        spaceBetween={5}
        slidesPerView={3}
        pagination = {true}
        navigation
       > {slides} </Swiper>
      
    </Container>
  )
}
