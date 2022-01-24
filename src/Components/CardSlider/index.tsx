import "swiper/css";
import MainCard from "../Elements/Card/MainCard";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { Container } from "./style";
import { RootState, useAppDispatch } from "../../Store/configureStore";
import { useSelector } from "react-redux";
import { FC, useEffect } from "react";
import { getAllProductsByPaginate } from "../../Store/Slices/products";
import SppinerLoading from "../Elements/SppinerLoading";

// install Swiper modules
SwiperCore.use([Pagination]);

export const CardSlider = () => {
  let products = useSelector(
    (state: RootState) => state.entities.products.productsByPaginate.products
  );

  return (
    <Container>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          1: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
          },
          // when window width is >= 768px
          767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
          },
        }}
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {products.length > 0 ? (
          products.map((item, index) => (
            <SwiperSlide tag="li">
              <MainCard data={item} />
            </SwiperSlide>
          ))
        ) : (
          <SppinerLoading />
        )}
      </Swiper>
    </Container>
  );
};
