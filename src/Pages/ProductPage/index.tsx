import React, { useState } from "react";

import ImageSection from "./imageSection";
import { IProductData } from "./interface";
import ProductDetails from "./productDetails";
import { FirstSection } from "./product.style";
import Container from "../../Components/Container";
import Specification from "./specification";
import Reviews from "./reviews";
import Rate from "../../Components/Elements/Rating";
import { CardSlider } from "../../Components/Slider/CardSlider";
import CardSliders from "./cardSlider";

const ProductPage = () => {
  const [rating, setRating] = useState<number>(3);

  const productData: IProductData[] = [
    {
      name: "Apple iPhone 11 Pro 256GB Memory",
      image: "Assets/img3.png",
      imageSmall: [
        { name: "Assets/img3.PNG" },
        { name: "Assets/img3.PNG" },
        { name: "Assets/img3.PNG" },
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
        {" "}
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
