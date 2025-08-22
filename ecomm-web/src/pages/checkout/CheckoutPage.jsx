import { useState, useEffect } from "react";
import axios from 'axios';
import "./checkout-header.css";
import "./CheckoutPage.css";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
export function CheckoutPage({ cartItems }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);

  useEffect(() => {
    const getData=async()=>{
      const resp1 = await axios.get(
        "http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime"
      );
      const resp2 = await axios.get("http://localhost:3000/api/payment-summary");
      setDeliveryOptions(resp1.data);
      setPaymentSummary(resp2.data);
    }

    getData();
  
    }, []);
  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              3 items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cartItems={cartItems} deliveryOptions={deliveryOptions}/>
            {paymentSummary && (
              <PaymentSummary paymentSummary={paymentSummary}/>
            )}
        </div>
      </div>
    </>
  );
}
