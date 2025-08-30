import "./checkout-header.css";
import "./CheckoutPage.css";
export function CheckoutHeader({totalCartItems}) {

  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <a href="/">
            {/* <img className="logo" src="images/logo.png" /> */}
            <span className='hehe-white-text'>Hehe</span>
            {/* <img className="mobile-logo" src="images/mobile-logo.png" /> */}
          </a>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <a className="return-to-home-link" href="/">
            {totalCartItems} items
          </a>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
  );
}
