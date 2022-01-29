import Container from "../../Components/Container";

import SppinerLoading from "../../Components/Elements/SppinerLoading";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../Store/configureStore";
import { Profile } from "../ProfilePage/profile.style";
import LeftSection from "../ProfilePage/leftSection";
import { Fragment, useEffect, useState } from "react";
import { getAllOrders } from "../../Store/Slices/orders";
import Typography from "../../Components/Typography";
import {
  Hr,
  OrderDetailsDiv,
  ProductContent,
  ProductDetails,
  ProductImage,
  ProductsDetailsDiv,
  Wrapper,
} from "./style";
import { FlexCenter } from "../ProductsPage/style";
import Pagination from "../../Components/Elements/Pagination";

const OrdersPage = () => {
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);

  let user = useSelector((state: RootState) => state.entities.user);
  let orders = useSelector((state: RootState) => state.entities.order);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllOrders(page));
    setPage(page);
  }, [dispatch, page]);

  return (
    <Container>
      {user.loading ? (
        <SppinerLoading />
      ) : (
        <>
          {user.data && (
            <Profile>
              <LeftSection UserProileData={user.data} />
              <Wrapper>
                {orders.OrdersByPaginate.orders.map((order, index) => (
                  <Fragment key={"fragment" + order._id}>
                    <div key={"order" + order._id}>
                      <div>
                        <Typography variant="body1">{index + 1}</Typography>
                      </div>
                      <OrderDetailsDiv>
                        <Typography variant="body2">
                          Create At: {order?.createdAt?.slice(0, 10)}
                        </Typography>

                        <Typography variant="body2">
                          Payment Method:{"  "}
                          {order.paymentMethod}
                        </Typography>
                        <Typography variant="body2">
                          Adress:{"  "}
                          {order?.shippingAddress?.address}
                          {"  "}
                          {order?.shippingAddress?.city}
                          {"  "}
                          {order?.shippingAddress?.country}
                          {"  "}
                          {order?.shippingAddress?.postalCode}
                        </Typography>
                        <Typography variant="body2">
                          {order.isDelivered ? "Delivered" : "Not Delivered"} |{" "}
                          {order.isPaid ? "Paid" : "Not Paid"}
                        </Typography>
                        <Typography variant="body2">
                          Shipping: {order?.shippingPrice?.toFixed(2)}
                          {"  "}| Tax: {order?.taxPrice?.toFixed(2)}
                        </Typography>
                        <Typography variant="body2">
                          Total Price: {order?.totalPrice?.toFixed(2)}
                        </Typography>
                      </OrderDetailsDiv>
                      <ProductsDetailsDiv>
                        {order?.orderItems?.map((item, index) => (
                          <ProductDetails key={"orderItem" + item._id}>
                            <div style={{ width: "10px" }}>{index + 1}</div>
                            <ProductImage>
                              <img src={item?.product?.images[0]} alt="" />
                            </ProductImage>
                            <ProductContent>
                              <Typography variant="body1">
                                Name: {item?.product?.name}
                              </Typography>
                              <Typography variant="body2">
                                Price: {item?.product?.price}
                              </Typography>
                              <Typography variant="body2">
                                Brand: {item?.product?.brand}
                              </Typography>
                            </ProductContent>
                          </ProductDetails>
                        ))}
                      </ProductsDetailsDiv>
                    </div>
                    <Hr key={"hr" + order._id} />
                  </Fragment>
                ))}
              </Wrapper>
            </Profile>
          )}
        </>
      )}
      <FlexCenter>
        <Pagination
          pages={orders.OrdersByPaginate.pages}
          currentPage={orders.OrdersByPaginate.page}
          setPage={setPage}
        />
      </FlexCenter>
    </Container>
  );
};

export default OrdersPage;
