import { useState } from 'react'
import { CartNotifacations, CartIcon, NotifacationsList } from './styles'

const Index = () => {

  const [show, setShow]= useState<boolean>(false);

  return (
    <CartNotifacations>
      <CartIcon onClick={()=> setShow(!show) } />
      { show && <NotifacationsList /> }
    </CartNotifacations>
  )
}

export default Index
