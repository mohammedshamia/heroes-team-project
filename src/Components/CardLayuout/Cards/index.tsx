import React from 'react'
import MainCard from '../../Elements/Card/MainCard'
// import phone from '../../../Assets/phone.png'
import img1 from '../../../Assets/img1.PNG'
import img2 from '../../../Assets/img2.PNG'
import img3 from '../../../Assets/img3.PNG'


import { Container } from './style'
export default function CardLayout() {
  const ItemCard = [
    { title: "Canon Eos 80D DSLR Camera", price: 56565, imgUrl: img1 }, { title: "phone", price: 551,imgUrl:img2 }, { title: "mobile", price: 5454,imgUrl:img3 }
  ]
  return (
    <Container>
      {ItemCard.map((item, index) => (
        <MainCard key={index} title={item.title} price={item.price} imgUrl={item.imgUrl} />
      ))}


    </Container>
  )
}
