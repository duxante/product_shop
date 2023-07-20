import './style/checkoutItems.style.css';
import { Form, Formik } from 'formik';
import { TextField } from '@mui/material';
import Heading from '../../../common/heading/heading.component';
import CheckoutProduct from './checkoutProduct.component';
import { useState } from 'react';

const CheckoutItems = ({ orderStepsHandle, selectedProducts, removeProductFromCart }) => {
  const [discount, setDiscount] = useState(0);

  const handleChange = (event) => {
    setDiscount(Number(event.target.value));
  };
  const totalPrice = selectedProducts.reduce((acc, product) => acc + product.price, 0);
  const totalPriceAfterDiscount = totalPrice - (totalPrice * discount) / 100;
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
          {!selectedProducts.length && (
            <p className="noItemsInCart">There is no any items in the cart!</p>
          )}
          {selectedProducts.map((product, index) => (
            <CheckoutProduct
              productId={product.id}
              removeProductFromCart={removeProductFromCart}
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
            <p>{`${totalPrice.toFixed(2)} $`}</p>
          </div>
          <Formik>
            {({ handleBlur, handleSubmit }) => (
              <Form className="totalNumbers" onSubmit={handleSubmit}>
                <TextField
                  name="discount"
                  label={!selectedProducts.length ? 'No items in the cart!' : 'Discount'}
                  placeholder="Enter your discount"
                  className="discountColor"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  disabled={!selectedProducts.length}
                />
              </Form>
            )}
          </Formik>
          <hr />
          <div className="totalNumbers">
            <p>Total</p>
            <h3>{`${totalPriceAfterDiscount.toFixed(2)} $`}</h3>
          </div>
          <button
            disabled={!selectedProducts.length}
            onClick={() => orderStepsHandle()}
            className="blueButton"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutItems;
