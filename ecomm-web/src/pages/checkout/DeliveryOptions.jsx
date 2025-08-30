import axios from "axios";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/formatMoney";

export function DeliveryOptions({ item, deliveryOptions, loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = "FREE Shipping";
        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)}-shipping`;
        }

        const updateDeliveryOptions = async () => {
          await axios.put(
            `https://ecomm-backend-dm33.onrender.com/api/cart-items/${item.productId}`,
            {
              deliveryOptionId: deliveryOption.id,
            }
          );
          await loadCart();
        };
        return (
          <>
            <div
              key={deliveryOption.id}
              className="delivery-option"
              onClick={updateDeliveryOptions}
            >
              <input
                type="radio"
                checked={deliveryOption.id === item.deliveryOptionId}
                onChange={() => {}}
                className="delivery-option-input"
                name={`delivery-options-${item.productId}`}
              />
              <div>
                <div className="delivery-option-date">
                  {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                    "dddd, MMMM D"
                  )}
                </div>
                <div className="delivery-option-price">{priceString}</div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
