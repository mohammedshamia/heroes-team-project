import React from 'react'
import { Step, Hr, Stepper, StepDisable, WrapperFormAndOrder, ContentPlaceOrder, ContentDetailsPlaceOrder, Title, LinkRouter, WrapperReviewPage, ContainerOrderDetails } from './style'
import Button from '../../Components/Elements/Buttons'
import Typography from '../../Components/Typography'
import { ContentCart } from './OrderDetails';
import ContentOrder from './ContentOrder';
import { useNavigate } from 'react-router';

interface Iprop {
  title: string,
  price: number,
  imgUrl: string,
}
const ItemCart: Iprop[] = [
  {
    title: "Canon Eos 80D DSLR Camera",
    price: 565,
    imgUrl: "https://picsum.photos/id/1/200/300",
  },
  { title: "phone", price: 551, imgUrl: "https://picsum.photos/id/0/200/300" },

];
const PlaceOrder = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/success")
  }
  return (
    <WrapperReviewPage>
      <Typography variant='h6' fontWeight={700} >Review Order </Typography>
      <Stepper>
        <> <Step opacity=".5" onClick={() => navigate("/product/review/shipping/:id") }> 1 </Step>
          <Typography
            children='shipping and payment'
            fontWeight={700}
            color='#000'
            style={{
              fontSize: "15px",
              opacity: ".5"

            }}
          />
        </>
        <Hr />
        <> <Step> 2 </Step>
          <Typography
            children=' place and order'
            fontWeight={700}
            color='#000'
            style={{
              fontSize: "15px",


            }}
          />
        </>

      </Stepper>
      <WrapperFormAndOrder Grid="600px 280px" > 
        <ContentPlaceOrder>  
          <Typography
            children='Shipping Address'
            fontWeight={700}
            color='#000'
            style={{
              fontSize: "15px",}}
          />
          <Typography
            children='John rose'
            color='#000'
            style={{
              fontSize: "15px",
            }}
          />
          <Typography
            children='56051 Jones Falls, Philippines, Turkey - 62502'
            color='#000'
            style={{
              fontSize: "15px",
            }}
          />
          <Title >
            <Typography
              children='Order Details'
              fontWeight={700}
              color='#000'
              variant='h6'
              style={{
                letterSpacing: "1.28px",
              }}
            />
            <LinkRouter to="/cart"> change </LinkRouter>
          </Title>
          {ItemCart.map((item, index) =>
            <ContentCart key={index} imgUrl={item.imgUrl} price={item.price} title={item.title} />
          )}
        </ContentPlaceOrder>
        <ContainerOrderDetails > 
        <ContentDetailsPlaceOrder>
          <Typography
            children='Order Details'
            fontWeight={700}
            color='#000'
            variant='h6'
            style={{
              letterSpacing: "1.28px",
            }}
          />
          <ContentOrder />
          </ContentDetailsPlaceOrder> 
          <Button
            type="submit"
            backgroundColor={"#FCDD06"}
            padding={"1rem 3rem"}
            fontSize={"12px"}
            form={"form"}
            onClick={handleClick}

          >
            place order
          </Button>
        </ContainerOrderDetails>  
      </WrapperFormAndOrder>
    </WrapperReviewPage>
  )
}

export default PlaceOrder
