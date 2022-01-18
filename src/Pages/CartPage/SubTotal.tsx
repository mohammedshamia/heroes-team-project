import React from 'react'
import Button from '../../Components/Elements/Buttons'
import Typography from '../../Components/Typography'
import { WrapperSubTotal } from './style'

const SubTotal = () => {
  return (
    <WrapperSubTotal>
      <Typography variant="h6" children="Subtotal (3) items" />
      <p style={{ textDecoration: "line-through" }}>  $989.97 </p>
      <Typography variant="h5" fontWeight={700} children=" $989.97" /> 
      <hr/>
      <Button
        type="submit"
        backgroundColor={"#FCDD06"}
        children="Proceed To Check out "
        padding={"1rem 3.5rem"}
        fontSize={"12px"}
      ></Button>

    </WrapperSubTotal>
  )
}

export default SubTotal
