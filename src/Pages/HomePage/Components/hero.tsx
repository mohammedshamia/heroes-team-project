import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper";
import {
  Slider,
  SliderDatiles,
  SliderDatilesm,
  SliderImage,
  SwiperWrapper,
} from "../style";
import Typography from "../../../Components/Typography";
import Button from "../../../Components/Elements/Buttons";
import Container from "../../../Components/Container";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const Hero = () => {
  const heroSlide = [
    {
      image: "Assets/img12.PNG",
      saveUp: "$49.99",
      name: "APPLE AIRPODS",
      text: "AirPods are the best-selling headphones in the world",
    },
    {
      image: "Assets/img1.PNG",
      saveUp: "$99.99",
      name: "iPhone 11 PRO",
      text: "Pro cameras.Pro display. Pro performance.",
    },
    {
      image: "Assets/img1.PNG",
      saveUp: "$39.99",
      name: "PlayStation 5",
      text: "Lightning-fast download speed with super-fast SSD storage",
    },
  ];
  return (
    <>
      {loading ? (
        <SppinerLoading />
      ) : (
        <SwiperWrapper>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {productsByTopThree.map((elemnt, index) => (
              <SwiperSlide key={elemnt.name + index}>
                <Container>
                  <Slider>
                    <SliderDatiles>
                      <SliderDatilesm>
                        <Typography
                          children={`Save up to $ ${elemnt.price} `}
                          style={{
                            fontSize: "18px",
                            letterSpacing: "1.28px",
                            marginBottom: ".5rem",
                          }}
                        />
                        <Typography
                          variant="h4"
                          fontWeight={800}
                          style={{
                            letterSpacing: " 2.4px",
                            textTransform: "uppercase",
                            marginBottom: ".5rem",
                          }}
                        >
                          {elemnt.name}
                        </Typography>
                        <Typography
                          children={elemnt.description}
                          style={{
                            fontSize: "18px",
                            letterSpacing: " 0.48px",
                            marginBottom: ".5rem",
                          }}
                        />
                      </SliderDatilesm>
                      <Button
                        backgroundColor={"#FCDD06"}
                        padding={"1rem 2rem "}
                        fontSize={"14px"}
                        backgroundColorHover={"#ffc107"}
                        margin={"1rem"}
                        onClick={() => handelClick(elemnt._id)}
                      >
                        Shop now
                      </Button>
                    </SliderDatiles>
                    <SliderImage src={elemnt.images[0]} alt="" />
                  </Slider>
                </Container>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      )}
    </>
  );
};

export default Hero;
