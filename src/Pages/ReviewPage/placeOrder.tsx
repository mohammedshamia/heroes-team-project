import React from 'react'
import { Step, Hr, Stepper, StepDisable } from './style'
import Button from '../../Components/Elements/Buttons'
import Typography from '../../Components/Typography'
const PlaceOrder = () => {
  return (
    <>
      <Typography variant='h6' fontWeight={700} >Review Order </Typography>
      <Stepper>
        <> <Step opacity=".5"> 1 </Step>
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
    </>
  )
}

export default PlaceOrder
