import { useEffect } from "react";
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
import { RootState, useAppDispatch } from "../../../Store/configureStore";
import { useSelector } from "react-redux";
import { getProductsByTopThree } from "../../../Store/Slices/products";
import SppinerLoading from "../../../Components/Elements/SppinerLoading";
import { useNavigate } from "react-router";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const Hero = () => {
  const dispatch = useAppDispatch();
  let { productsByTopThree, loading } = useSelector(
    (state: RootState) => state.entities.products
  );
  useEffect(() => {
    dispatch(getProductsByTopThree());
  }, [dispatch]);
  let navigate = useNavigate();

  const handelClick = (id: string) => {
    navigate(`/product/${id}`);
  };
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
                        margin={"1rem 0"}
                        onClick={() => handelClick(elemnt._id)}
                      >
                        Shop now
                      </Button>
                    </SliderDatiles>
                    <SliderImage>
                      <img src={elemnt.images[0]} alt="" />
                    </SliderImage>
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
