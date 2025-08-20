import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
