import React, { useState } from "react";

import ImageSection from "./Components/imageSection";
import { IProductData } from "./interface";
import ProductDetails from "./Components/productDetails";
import { FirstSection, LinkBack, TitleLink } from "./product.style";
import Container from "../../Components/Container";
import Specification from "./Components/specification";
import Reviews from "./Components/reviews";
import Rate from "../../Components/Elements/Rating";
import CardSliders from "./Components/cardSlider";
import Typography from "../../Components/Typography";

const ProductPage = () => {
  const [rating, setRating] = useState<number>(3);

  const productData: IProductData[] = [
    {
      name: "Apple iPhone 11 Pro 256GB Memory",
      image:
        "https://st4.depositphotos.com/2467311/41795/v/1600/depositphotos_417954882-stock-illustration-mobile-phone-vector-mockup-white.jpg",
      imageSmall: [
        {
          name:
            "https://st4.depositphotos.com/2467311/41795/v/1600/depositphotos_417954882-stock-illustration-mobile-phone-vector-mockup-white.jpg",
        },
        {
          name:
            "https://st4.depositphotos.com/2467311/41795/v/1600/depositphotos_417954882-stock-illustration-mobile-phone-vector-mockup-white.jpg",
        },
        {
          name:
            "https://st4.depositphotos.com/2467311/41795/v/1600/depositphotos_417954882-stock-illustration-mobile-phone-vector-mockup-white.jpg",
        },
      ],
      color: [{ name: "silver" }, { name: "black" }, { name: "red" }],
      size: [{ name: "64GB" }, { name: "256B" }, { name: "512GB" }],
      text:
        "Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex enim aperiam consequatur. Est temporibus ab. Pariatur aut ut temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis consequuntur non sunt et neque. Aut dolorem repellat quo architecto sint minima doloremque. At quae laborum incidunt vel voluptas dolor similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis laborum consequuntur sint porro omnis et facere. Voluptatem vitae quo. Similique atque cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et qui consequatur aut. Eum consequuntur necessitatibus veritatis voluptatem qui velit repellat numquam tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est expedita aspernatur non repellendus nihil perferendis. Et deserunt doloremque esse. Iusto veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore assumenda. Aut doloribus unde repellat pariatur consequatur. Blanditiis voluptas aut tempora facilis fugi.",
      price: 499.99,
      header: [
        { title: "brand", name: "apple" },
        { title: "brand", name: "ut" },
        { title: "brand", name: "apple" },
        { title: "brand", name: "apple" },
        { title: "brand", name: "apple" },
      ],

      body: [
        { title: "brand", name: "apple" },
        { title: "voluptate", name: "omet" },
        { title: "brand", name: "ut" },
        { title: "voluptate", name: "omet" },
        { title: "brand", name: "apple" },
        { title: "voluptate", name: "omet" },
        { title: "brand", name: "apple" },
        { title: "voluptate", name: "omet" },
        { title: "brand", name: "apple" },
        { title: "voluptate", name: "omet" },
      ],

      reviews: [
        {
          name: "Jenifer Medhurst",
          date: "28th March 2022",
          rating: (
            <Rate
              rating={rating}
              onRating={(rate: number) => setRating(rate)}
            />
          ),
          text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
        },
        {
          date: "28th March 2022",

          name: "Jenifer Medhurst",
          rating: (
            <Rate
              rating={rating}
              onRating={(rate: number) => setRating(rate)}
            />
          ),
          text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
        },
        {
          name: "Jenifer Medhurst",
          date: "28th March 2022",

          rating: (
            <Rate
              rating={rating}
              onRating={(rate: number) => setRating(rate)}
            />
          ),
          text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
        },
      ],
    },
  ];
  return (
    <>
      <Container>
        <TitleLink>
          <Typography style={{  fontSize: "15px",letterSpacing: '0.96px' }}>
            <LinkBack to="/">Back </LinkBack> / {productData[0].name}
          </Typography>
        </TitleLink>  
        <FirstSection>
          <ImageSection ProductData={productData} />
          <ProductDetails ProductData={productData} />
        </FirstSection>
        <Specification ProductData={productData} />
        <Reviews ProductData={productData} />
      </Container>
      <CardSliders />
    </>
  );
};

export default ProductPage;
