import './style/checkoutItems.style.css';
import { Formik } from 'formik';
import { TextField, colors } from '@mui/material';
import Heading from '../../../common/heading/heading.component';
import CheckoutProduct from './checkoutProduct.component';

const CheckoutItems = ({ orderStepsHandle, selectedProducts }) => {
  /* const totalPrice = (selectedProducts) => {
    let sum = selectedProducts.reduce((accumulator, product) => {
      return accumulator + parseFloat(product.price.replace(',', '.'));
    }, 0);

    return sum;
  }; */
  const totalPrice = selectedProducts.reduce((acc, product) => acc + product.price, 0);
  console.log(totalPrice);
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
          {selectedProducts.map((product, index) => (
            <CheckoutProduct
              key={index}
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
            <p>31.48</p>
          </div>
          <div className="totalNumbers">
            {/* <p>Discount</p>
            <p className="discountColor">$-29,00</p> */}
          </div>
          <hr />
          <div className="totalNumbers">
            <p>Total</p>
            <h3>{`${totalPrice.toFixed(2)} $`}</h3>
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
