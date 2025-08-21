import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useEffect, useState } from "react";

function App() {
  const[cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    fetch("https://dummyjson.com/carts/1")
          .then((response) => response.json())
          .then((data) => {
            setCartItems(data.products);
          });
  }, []);
  return (
    <>
      
      <Routes>
        <Route index element={<HomePage cartItems={cartItems}/>} />
        <Route path="checkout" element={<CheckoutPage cartItems={cartItems} />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
