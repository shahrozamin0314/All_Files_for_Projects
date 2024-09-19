import React from "react";
import Product from "./components/Product/Product";
import Navbar from '../src/components/Navbar'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>

      <Navbar/>

      {/*<HomePage/>*/}

      <Product/>

      <Footer/>

    </div>
  );
}

export default App;
