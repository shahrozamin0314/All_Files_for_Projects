import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/pages/HomePage'
import Cart from '../components/cart/Cart'
import Navbar from "../components/Navbar"
import Product from '../components/Product/Product'
import Footer from '../components/Footer/Footer'

const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>

        <Routes>
            <Route path='/' element={ <HomePage/> } ></Route>
            <Route path='/cart' element={ <Cart/> } ></Route>
            <Route path='/levelOne:/levelTwo:/levelThee' element={ <Product/> } ></Route>

      {/*<Product/>*/}
      {/*<ProductDetails/>*/}
      {/*<Cart/>*/}
      {/*<Checkout/>*/}
      {/*<Order/>*/}
      {/*<OrderDetailes />*/}

        </Routes>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters