import Typography from "../../Components/Typography";
import { LinkRouter, Title, Price, Hr, ContentOrderDetails } from "./style";
import { ContentOrder } from "./ContentOrder";
import { ItemImg } from "../../Components/Elements/Card/style";
import { RootState } from "../../Store/configureStore";
import { useSelector } from "react-redux";

export interface Iprop {
  title: string;
  price: number;
  imgUrl: string;
  qty: number; 
}

const OrderDetails = () => {
  const items = useSelector((state: RootState) => state?.entities?.user?.data?.cart?.items);
  return (
    <div style={{ marginBottom: "15px" }}>
      <Title>
        <Typography
          children="Order Details"
          fontWeight={700}
          // color='#000'
          variant="h6"
          style={{
            letterSpacing: "1.28px",
          }}
        />
        <LinkRouter to="/cart"> change </LinkRouter>
      </Title>
      {items?.map((item: any) => (
        <>
          <ContentCart
            key={item.product._id}
            imgUrl={item.product.images[0] as string}
            price={item.product.price}
            title={item.product.name}
            qty={item.qty}
          />
          <Hr width="100%" />
        </>
      ))}
      <ContentOrder />
    </div>
  );
};

export default OrderDetails;
export const ContentCart = (props: Iprop) => {
  const { title, imgUrl, price, qty } = props;
  return (
    <>
      <ContentOrderDetails>
        <ItemImg alignItems="center">
          <img src={imgUrl} alt="pictured" width={"100%"} loading="lazy" />
        </ItemImg>
        <div style={{ width: "25%" }}>
          <Typography
            children={title}
            variant="h6"
            gutterBottom
            style={{
              fontSize: "13px",
              display: "flex",
              alignSelf: "flex-start",
            }}
          />

          <Price>
            <Typography
              children={` $ ${price} x${qty}`}
              variant="h6"
              style={{
                fontSize: "13px",
              }}
            />

            <Typography
              children={` $ ${price} `}
              fontWeight={700}
              variant="h6"
              style={{
                fontSize: "13px",
              }}
            />
          </Price>
        </div>
      </ContentOrderDetails>
    </>
  );
};
