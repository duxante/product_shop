import { useState } from 'react';
import './cartPage.style.css';
import CheckoutDetails from './components/checkoutDetails.component';
import CheckoutItems from './components/checkoutItems.component';

const CartPage = () => {
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const orderStepsHandle = () => {
    setCheckoutVisible(true);
  };
  return (
    <div className="cartPageHolder">
      {!checkoutVisible && <CheckoutItems orderStepsHandle={orderStepsHandle} />}
      {checkoutVisible && <CheckoutDetails />}
    </div>
  );
};

export default CartPage;
