import { useState } from 'react';
import './cart.style.css';
import CheckoutDetails from './components/checkoutDetails.component';
import CheckoutItems from './components/checkoutItems.component';

const Cart = ({ selectedProducts, removeProductFromCart, clearCart }) => {
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const orderStepsHandle = () => {
    setCheckoutVisible(true);
  };
  return (
    <div className="cartPageHolder">
      {!checkoutVisible && (
        <CheckoutItems
          removeProductFromCart={removeProductFromCart}
          selectedProducts={selectedProducts}
          orderStepsHandle={orderStepsHandle}
        />
      )}
      {checkoutVisible && <CheckoutDetails clearCart={clearCart} />}
    </div>
  );
};

export default Cart;
