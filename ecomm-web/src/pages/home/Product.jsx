import axios from "axios";
import { formatMoney } from "../../utils/formatMoney";
import { useState } from "react";

export function Product({ product, loadCart }) {
  const [quantity, setQuantity] = useState();
  const addToCart = async () => {
    try {
      await axios.post("https://ecomm-backend-dm33.onrender.com/api/cart-items", {
        productId: product.id,
        quantity:(quantity>1)?quantity:1,
      });
      await loadCart();
    } catch (e) {
      console.log("Backend is not running ig -> ", e);
    }
  };
  const selectQuantity = (e) => {
    const q = Number(e.target.value);
    setQuantity(q);
    console.log(q);
  }
  return (
    <div key={product.id} className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={product.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">{formatMoney(product.priceCents)}</div>

      <div className="product-quantity-container">
        <select
          value={quantity}
          onChange={selectQuantity}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart">
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button className="add-to-cart-button button-primary" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}
