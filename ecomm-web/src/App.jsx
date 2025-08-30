import { Routes, Route } from "react-router";
import axios from "axios";
import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";

import { useEffect, useState } from "react";
import { NotFoundPage } from "./pages/error/NotFoundPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const loadCart = async () => {
    const reponse = await axios.get(
      "https://ecomm-backend-dm33.onrender.com/api/cart-items?expand=product"
    );
    setCartItems(reponse.data);
  };
  useEffect(() => {
    loadCart();
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<HomePage cartItems={cartItems} loadCart={loadCart} />} />
        <Route
          path="checkout"
          element={<CheckoutPage cartItems={cartItems} loadCart={loadCart} />}
        />
        <Route path="orders" element={<OrdersPage cartItems={cartItems} />} />
        <Route path="tracking" element={<TrackingPage />}></Route>
        <Route path="*" element={<NotFoundPage cartItems={cartItems} />}></Route>
      </Routes>
    </>
  );
}

export default App;
