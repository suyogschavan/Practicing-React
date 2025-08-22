import { Routes, Route } from "react-router";
import axios from 'axios';
import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useEffect, useState } from "react";

function App() {
  const[cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/api/cart-items?expand=product")
          .then((response) => {
            setCartItems(response.data);
          });
  }, []);
  return (
    <>
      
      <Routes>
        <Route index element={<HomePage cartItems={cartItems}/>} />
        <Route path="checkout" element={<CheckoutPage cartItems={cartItems} />} />
        <Route path="orders" element={<OrdersPage cartItems={cartItems}/>} />
        <Route path="tracking" element={<TrackingPage />}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
