import { Grid } from '@material-ui/core'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Box, Button, TextField } from '@mui/material'

const DeliveryAddressForm = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data= new FormData(e.currentTarget);

        const address={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zip:data.get("zip"),
            mobile:data.get("phoneNumber")
        }

        console.log("address",address);
    }

    return (
        <div>
            <Grid container spacing={4} >
                <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'></div>
                    <AddressCard />
                    <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained'>Delete Here</Button>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-ss-md shadow-md p-5">

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>

                                <Grid item sx={12} sm={6}>
                                    <TextField required id='firstName' name='firstName' label='FirstName' fullWidth autoComplete='given-name' />
                                </Grid>
                                <Grid item sx={12} sm={6}>
                                    <TextField required id='lastName' name='lastName' label='LastName' fullWidth autoComplete='given-name' />
                                </Grid>

                                <Grid item sx={12} sm={12}>
                                    <TextField required id='address' name='address' label='Address' fullWidth autoComplete='given-name' multiline rows={5} />
                                </Grid>

                                <Grid item sx={12} sm={6}>
                                    <TextField required id='city' name='city' label='City' fullWidth autoComplete='given-name' />
                                </Grid>
                                <Grid item sx={12} sm={6}>
                                    <TextField required id='state' name='state' label='State/Province/Rigion' fullWidth autoComplete='given-name' />
                                </Grid>

                                <Grid item sx={12} sm={6}>
                                    <TextField required id='zip' name='zip' label='Zip/Postal Code' fullWidth autoComplete='shipping postal-code' />
                                </Grid>
                                <Grid item sx={12} sm={6}>
                                    <TextField required id='phoneNumber' name='phoneNumber' label='PhoneNumber' fullWidth autoComplete='given-name' />
                                </Grid>

                                <Grid item sx={12} sm={6}>
                                    <Button sx={{ py:1.5, mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained' type='submit' >Deliver Here</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm