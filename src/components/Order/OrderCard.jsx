import { Grid } from '@material-ui/core'
import React from 'react'

const OrderCard = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top ' src='https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/y/g/m/l-sleeveless-shset95222-shae-by-sassafras-original-imaggjzkwyyyezzg.jpeg?q=70' alt='' />
                    </div>
                    <div className='ml-5 space-y-2'>
                        <p className=''>Mens favert fashon</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>500$</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <p>
                        <span>Delivered on march 02</span>
                    </p>}

                    {false && <p>
                        <span>Delivered on march 02</span>
                    </p>}
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard