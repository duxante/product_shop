import { useState } from 'react';
import './cartPage.style.css';
import CheckoutDetails from './components/checkoutDetails.component';
import CheckoutItems from './components/checkoutItems.component';

const CartPage = ({ selectedProducts }) => {
  console.log(selectedProducts, 'Cart Page Products');
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const orderStepsHandle = () => {
    setCheckoutVisible(true);
  };
  return (
    <div className="cartPageHolder">
      {!checkoutVisible && (
        <CheckoutItems selectedProducts={selectedProducts} orderStepsHandle={orderStepsHandle} />
      )}
      {checkoutVisible && <CheckoutDetails />}
    </div>
  );
};

export default CartPage;
