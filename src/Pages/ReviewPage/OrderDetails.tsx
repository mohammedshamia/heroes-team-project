import React from 'react'
// import { Link } from 'react-router-dom'
import Typography from '../../Components/Typography'
import { LinkRouter, Title, ContentOrder, ContentProduct, Price,Hr } from './style'
import { CardImg } from '../../Components/Elements/Card'
import { prependOnceListener } from 'process';
import { TypePredicateKind } from 'typescript';
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
        <ContentCart key={index} imgUrl={item.imgUrl} price={item.price} title={ item.title}/> 
      )}
      <Price> 
      <Typography
        children='subtotal'
        variant='h6'
        style={{
          fontSize: "13px",
          color:'#707070',

        }}
      />
      <Typography
        children='$595'
        variant='h6'
        style={{
          fontSize: "13px",
          color: '#707070',

        }}
        />
      </Price>
      <Price>
        <Typography
          children='Tax'
          variant='h6'
          style={{
            fontSize: "13px",
            color: '#707070',

          }}
        />
        <Typography
          children='$2.5'
          variant='h6'
          style={{
            fontSize: "13px",
            color: '#707070',

          }}
        />
      </Price>
      <Price>
        <Typography
          children='shipping'
          variant='h6'
          style={{
            fontSize: "13px",
            color: '#707070',

          }}
        />
        <Typography
          children='$0.00'
          variant='h6'
          style={{
            fontSize: "13px",
            color: '#707070',

          }}
        />
      </Price>
      <Price>
        <Typography
          children='Total'
          variant='h6'
          style={{
            fontSize: "13px",
            color: '#707070',

          }}
        />
        <Typography
          children='$592'
          variant='h6'
          style={{
            fontSize: "13px",
            color: '#707070',

          }}
        />
      </Price>
    </>
  )
}

export default OrderDetails
const ContentCart = (props:Iprop) => {
  const { title, imgUrl, price } = props
  return (
    <> 
      <ContentOrder> 
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
      </ContentOrder>
      <Hr width="300px" /> 
    </>
  )
}
