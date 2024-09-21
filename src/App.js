import React from "react";
import Navbar from '../src/components/Navbar'
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div>

      <Navbar/>
      
      {/*<HomePage/>*/}
      {/*<Product/>*/}
      <ProductDetails/>

      <Footer/>

    </div>
  );
}

export default App;
