import Heading from '../../common/heading/heading.component';
import './cartPage.style.css';
import CheckoutDetails from './components/checkoutDetails.component';
import CheckoutItems from './components/checkoutItems.component';

const CartPage = () => {
  return (
    <div className="cartPageHolder">
      <Heading headingText="Cart" />
      <CheckoutItems />
      <CheckoutDetails />
    </div>
  );
};

export default CartPage;
