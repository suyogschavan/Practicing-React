import { useState, useEffect } from "react";
import axios from "axios";
import "./CheckoutPage.css";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import { CheckoutHeader } from "./CheckoutHeader";
export function CheckoutPage({ cartItems, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      const resp1 = await axios.get(
        "http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(resp1.data);
    };

    fetchCheckoutData();
  }, []);
  useEffect(()=>{
    const getPaymentInfo = async ()=>{
      const resp2 = await axios.get(
        "http://localhost:3000/api/payment-summary"
      );
      setPaymentSummary(resp2.data);
    }
    getPaymentInfo();
  }, [cartItems])
  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cartItems={cartItems}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />
          {paymentSummary && <PaymentSummary paymentSummary={paymentSummary} />}
        </div>
      </div>
    </>
  );
}
