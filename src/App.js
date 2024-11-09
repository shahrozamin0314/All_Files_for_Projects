import React from "react";
import Navbar from '../src/components/Navbar'
import Footer from "./components/Footer/Footer";
import Cart from "./components/cart/Cart";
import Checkout from "./components/CheckOut/Checkout";
import Order from "./components/Order/Order";
import OrderDetailes from "./components/Order/OrderDetailes";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";

function App() {
  return (
    <div>
      <div className="mb-2">

        <Routes>
          <Route path="/*" element={ <CustomerRouters/> } ></Route>
        </Routes>

        
      </div>
    </div>
  );
}

export default App;
