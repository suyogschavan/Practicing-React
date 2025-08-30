import { useState, useEffect } from "react";
import axios from "axios";
import "./CheckoutPage.css";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import { CheckoutHeader } from "./CheckoutHeader";
export function CheckoutPage({ cartItems, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  useEffect(() => {
    const fetchCheckoutData = async () => {
      const resp1 = await axios.get(
        "https://ecomm-backend-dm33.onrender.com/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(resp1.data);
    };

    fetchCheckoutData();
  }, []);
  useEffect(()=>{
    const getPaymentInfo = async ()=>{
      const resp2 = await axios.get(
        "https://ecomm-backend-dm33.onrender.com/api/payment-summary"
      );
      setPaymentSummary(resp2.data);
      setTotalCartItems(resp2.data.totalItems);
    }
    getPaymentInfo();
  }, [cartItems])
  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader totalCartItems={totalCartItems}/>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cartItems={cartItems}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />
          {paymentSummary && <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>}
        </div>
      </div>
    </>
  );
}
