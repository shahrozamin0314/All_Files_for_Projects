import React from "react";
import Navbar from '../src/components/Navbar'
import Footer from "./components/Footer/Footer";
import Cart from "./components/cart/Cart";
import Checkout from "./components/CheckOut/Checkout";
import Order from "./components/Order/Order";

function App() {
  return (
    <div>
      <div className="mb-2">
        <Navbar/>
      </div>
      
      {/*<HomePage/>*/}
      {/*<Product/>*/}
      {/*<ProductDetails/>*/}
      {/*<Cart/>*/}
      {/*<Checkout/>*/}
      <Order/>
      

    <div>
      <Footer/>
    </div>

    </div>
  );
}

export default App;
