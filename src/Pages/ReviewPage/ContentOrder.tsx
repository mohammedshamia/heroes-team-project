import React from 'react'
import Typography from '../../Components/Typography'
import { Price } from './style'

 export const ContentOrder = () => {
  return (
    <>
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
          fontWeight={700}
          style={{
            fontSize: "13px",
            color: '#000',

          }}
        />
        <Typography
          children='$592'
          variant='h6'
          fontWeight={700}
          style={{
            fontSize: "13px",
            color: '#000',

          }}
        />
      </Price>
    </>
  )
}

export default ContentOrder
