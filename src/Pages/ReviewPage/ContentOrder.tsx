import React from 'react'
import Typography from '../../Components/Typography'
import { Price } from './style'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/configureStore'
export const ContentOrder = () => {
  const items = useSelector((state: RootState) => state?.entities?.user?.data?.cart);
  const subtotal = items && Object.values(items).slice(2, 3).toString();
  const tax = .05 * Number(subtotal);
  const total = Number(subtotal) + tax;
  return (
    <>
  <Price> 
      <Typography
        children='subtotal'
          variant='h6'
        style={{
          fontSize: "13px",
          // color:'#707070',

        }}
      />
      <Typography
          children={`${subtotal}`}
        variant='h6'
        style={{
          fontSize: "13px",

        }}
        />
      </Price>
      <Price>
        <Typography
          children='Tax'
          variant='h6'
          style={{
            fontSize: "13px",

          }}
        />
        <Typography
          children={`${tax} `}
          variant='h6'
          style={{
            fontSize: "13px",

          }}
        />
      </Price>
      <Price>
        <Typography
          children='shipping'
          variant='h6'
          style={{
            fontSize: "13px",

          }}
        />
        <Typography
          children='$0.00'
          variant='h6'
          style={{
            fontSize: "13px",
            // color: '#707070',

          }}
        />
      </Price>
      <Price>
        <Typography
          children='Total'
          variant='h6'
          fontWeight={700}
          style={{
            fontSize: "13px",
            // color: '#000',

          }}
        />
        <Typography
          children={`${total}`}
          variant='h6'
          fontWeight={700}
          style={{
            fontSize: "13px",
            // color: '#000',

          }}
        />
      </Price>
    </>
  )
}

export default ContentOrder
