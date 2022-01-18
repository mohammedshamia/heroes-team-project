import React from 'react'
// import { Link } from 'react-router-dom'
import Typography from '../../Components/Typography'
import { LinkRouter, Title, ContentProduct, Price, Hr, ContentOrderDetails } from './style'
import {ContentOrder} from './ContentOrder';
import { CardImg } from '../../Components/Elements/Card'

interface Iprop {
  title:string, 
    price: number, 
      imgUrl:string, 
}
const ItemCart: Iprop[] = [
  {
    title: "Canon Eos 80D DSLR Camera",
    price: 565,
    imgUrl: "https://picsum.photos/id/1/200/300",
  },
  { title: "phone", price: 551, imgUrl: "https://picsum.photos/id/0/200/300" },
 
];
const OrderDetails = () => { 
  return (
    <> 
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
     <LinkRouter to ="/cart"> change </LinkRouter>
      </Title>
      {ItemCart.map((item, index) =>
        <> 
          <ContentCart key={index} imgUrl={item.imgUrl} price={item.price} title={item.title} />
          <Hr width="300px" /> 
          </> 
      )}
      <ContentOrder />
    </>
  )
}

export default OrderDetails
  export const ContentCart = (props:Iprop) => {
  const { title, imgUrl, price } = props
  return (
    <> 
      <ContentOrderDetails> 
        <CardImg src= {imgUrl} width="90px" />
        <ContentProduct> 
        <Typography
          children= {title}
          variant='h6'
          style={{
            color: '#707070',
            fontSize:"13px"
          }}
          />
          <Price> 
        <Typography
          children= {`${price} x1`}
          variant='h6'
          style={{
            color: '#707070',
            fontSize: "13px"
          }}
          />
          <Typography
              children= {price}
              fontWeight={700}
            variant='h6'
            style={{
              color: '#000',
              fontSize: "13px"
            }}
            />
          </Price>
        </ContentProduct> 
      </ContentOrderDetails>
    </>
  )
}
