import { useEffect } from "react";
import { useSelector } from "react-redux";
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
import Container from "../../../Components/Container";
import { DividerComponent } from "../../../Components/Elements/Devider/styles.styled";
import SppinerLoading from "../../../Components/Elements/SppinerLoading";
import Typography from "../../../Components/Typography";
import { RootState, useAppDispatch } from "../../../Store/configureStore";
import { getAllcategories } from "../../../Store/Slices/products";
import {
  Categ,
  Category,
  CategoryImage,
  CategoryoneImage,
  Image,
} from "../style";
import { useNavigate } from "react-router";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let { categories, loading } = useSelector(
    (state: RootState) => state.entities.products
  );
  useEffect(() => {
    dispatch(getAllcategories());
  }, [dispatch]);
  return (
    <Container className="category">
      {loading ? (
        <SppinerLoading />
      ) : (
        <>
          <Categ>
            <Typography
              variant="h5"
              fontWeight={700}
              style={{ textTransform: "uppercase" }}
            >
              Featured Categories
            </Typography>
          </Categ>
          <DividerComponent />
          <Category>
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                1: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 0,
                },
                // when window width is >= 768px
                500: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 10,
                },
                767: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 10,
                },
              }}
              direction={"horizontal"}
              pagination={{
                clickable: true,
              }}
              mousewheel={false}
              keyboard={true}
            >
              {categories.length > 0 &&
                categories.map((element, index) => (
                  <SwiperSlide key={element.name + index}>
                    <CategoryImage key={element.name + index}>
                      <CategoryoneImage>
                        <Image src={element.image} />
                      </CategoryoneImage>
                      <Typography
                        variant="body1"
                        style={{ padding: "1rem", cursor: "pointer" }}
                        fontWeight={700}
                        onClick={() =>
                          navigate(`/products/category/${element.name}`)
                        }
                      >
                        {element.name}
                      </Typography>
                    </CategoryImage>
                  </SwiperSlide>
                ))}
            </Swiper>
          </Category>
        </>
      )}
    </Container>
  );
};

export default Categories;
