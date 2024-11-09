import { colors, Step, StepLabel, Stepper } from '@material-ui/core'
import React from 'react'


const steps = [
    "Placed",
    "Order Confirmed",
    "Shipping",
    "Out For Delivery",
    "Delivered"
]

const OrderTraker = ({ activeStep }) => {
    return (
        <div className='w-full'>

            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => <Step>
                    <StepLabel sx={{ colors: "#9155FD", fontSize: "44px" }}>{label}</StepLabel>
                </Step>)}
            </Stepper>

        </div>
    )
}

export default OrderTraker