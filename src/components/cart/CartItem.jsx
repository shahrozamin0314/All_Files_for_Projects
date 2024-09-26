import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>

            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/kw5ag7k0/kurta/f/j/g/xxl-sg1011-sanganeri-feb-original-imag8w9xbbakjkju.jpeg?q=70' alt='' />
                </div>

                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Houndstooth Rayon Blend Stitched Anarkali Gown</p>
                    <p className='opacity-70'>size:L,White</p>
                    <p className='opacity-70 mt-2'>Seller: Riya Creation</p>

                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='font-semibold'>500$</p>
                        <p className='opacity-50 line-through'>100$</p>
                        <p className='font-semibold text-green-600'>90%</p>
                    </div>

                </div>
            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton >
                        <RemoveCircleOutlineIcon />
                    </IconButton>

                    <span className='py-1 px-7 border rounded-sm'>3</span>
                        <IconButton sx={{color:'RGB(171 112 242)'}}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                    
                </div>

                <div>
                    <Button sx={{color:'RGB(171 112 242)'}}>remove</Button>
                </div>
            </div>

        </div>
    )
}

export default CartItem