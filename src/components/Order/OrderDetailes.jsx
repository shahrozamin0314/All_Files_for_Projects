import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetailes = () => {
    return (
        <div className='px-5  lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-10 '>
                <OrderTraker activeStep={3} />
            </div>

            <Grid className='space-y-5' container>
                {[1, 1, 1, 1, 1].map((item) =>
                    <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }}>

                        <Grid className='flex items-center space-x-4' item xs={6}>

                            <div className='flex items-center space-x-4'>
                                <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/y/g/m/l-sleeveless-shset95222-shae-by-sassafras-original-imaggjzkwyyyezzg.jpeg?q=70' alt='' />
                            </div>
                            <div className='space-y-2 ml-5 '>
                                <p className='font-semibold'>Girls sari with reaed</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color : Red</span> <span>Size : M</span></p>
                                <p>Seller: linaria</p>
                                <p>500$</p>
                            </div>

                        </Grid>

                        <Grid item>
                            <Box sx={{ color: deepPurple[500] }}>
                                <StarBorderIcon sx={{ fontSize: "2rem" }} />
                                <span>Rate & Review</span>
                            </Box>
                        </Grid>

                    </Grid>)}

            </Grid>

        </div>
    )
}

export default OrderDetailes