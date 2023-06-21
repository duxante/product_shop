import './style/checkoutItems.style.css';
import { Formik } from 'formik';
import { TextField, colors } from '@mui/material';
import Heading from '../../../common/heading/heading.component';
import CheckoutProduct from './checkoutProduct.component';

const CheckoutItems = ({ orderStepsHandle, selectedProducts }) => {
  return (
    <>
      <Heading headingText="Cart" />
      <div className="productsAndTotal">
        <div className="productsHolder">
          <div className="subtitlesHolder">
            <p>PRODUCT</p>
            <p>PRICE</p>
          </div>
          <hr />
          {selectedProducts.map((product) => (
            <CheckoutProduct
              image={product.img}
              category={product.category}
              price={product.price}
              name={product.name}
            />
          ))}
        </div>
        <div className="totalCostHolder">
          <div className="totalNumbers">
            <p>Subtotal</p>
            <p>$31,48</p>
          </div>
          <div className="totalNumbers">
            {/* <p>Discount</p>
            <p className="discountColor">$-29,00</p> */}
          </div>
          <hr />
          <div className="totalNumbers">
            <p>Total</p>
            <h3>$3.119,00</h3>
          </div>
          <button onClick={() => orderStepsHandle()} className="blueButton">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutItems;
