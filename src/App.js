import React from "react";
import Navbar from '../src/components/Navbar'
import Footer from "./components/Footer/Footer";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div>

      <Navbar/>
      
      {/*<HomePage/>*/}
      {/*<Product/>*/}
      {/*<ProductDetails/>*/}
      <Cart/>

      <Footer/>

    </div>
  );
}

export default App;
