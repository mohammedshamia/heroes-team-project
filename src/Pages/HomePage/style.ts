import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

export const Swipers = styled(Swiper)`
  background: #f2f2f2;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding: 2rem 8rem;
`;
export const Slider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

export const SliderDatiles = styled.div`
  width: 25%;
  text-align: left;
`;

export const SliderDatilesm = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const SliderImage = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: 30%;
  height: 20%;
`;
