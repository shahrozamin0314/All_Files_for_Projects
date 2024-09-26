import React from 'react'
import CartItem from './CartItem'
import Button from '@mui/material/Button';

const Cart = () => {
    return (
        <div>

            <div className='lg:grid grid-cols-3 lg:px-16 relative mt-10'>

                <div className='col-span-2'>
                    {[1,1,1,1].map((item)=> <CartItem /> )}
                </div>

                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />
                        <div className='space-y-3 font-semibold mb-10'>

                            <div className='flex justify-between pt-3 text-black'>
                                <span>Prive</span>
                                <span>5000$</span>
                            </div>

                            <div className='flex justify-between pt-3 text-black'>
                                <span>DisCount</span>
                                <span className='text-green-600'>10%</span>
                            </div>

                            <div className='flex justify-between pt-3 text-black'>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free</span>
                            </div>

                            <div className='flex justify-between pt-3 text-black'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>5100$</span>
                            </div>
                        </div>

                        <Button variant="contained" className='w-full' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }} >
                            CheckOut
                        </Button>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Cart