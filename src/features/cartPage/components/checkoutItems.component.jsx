import './style/checkoutItems.style.css';
import { Formik } from 'formik';
import { TextField, colors } from '@mui/material';
import Heading from '../../../common/heading/heading.component';

const CheckoutItems = ({ orderStepsHandle }) => {
  return (
    <>
      <Heading headingText="Cart" />
      <div className="productsAndTotal">
        <div className="productsHolder">
          <div className="subtitlesHolder">
            <p>PRODUCT</p>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>SUM</p>
          </div>
          <hr />
          <div className="oneProduct">
            <div className="oneProductDescribe">
              <img
                src="https://beetstech.com/wp-content/uploads/MacBook_Pro_Unibody_15.png"
                alt=""
              />
              <div>
                <p className="productName">Laptop</p>
                <p>Apple Macbook PRO 15"</p>
              </div>
            </div>
            <p>$1.599,00</p>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <p>$1.599,00</p>
            <p>X</p>
          </div>
          <hr />
          <div className="oneProduct">
            <div className="oneProductDescribe">
              <img
                src="https://assets3.razerzone.com/_rA-1BJYpRX_Etv3bwQDmxfVbho=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh35%2Fh71%2F9088501579806%2FRZ09-03295E63-R3U1-2-500x500.png"
                alt=""
              />
              <div>
                <p className="productName">Laptop</p>
                <p>Razer Blade PRO 17 120Hz</p>
              </div>
            </div>
            <p>$1.599,00</p>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <p>$1.599,00</p>
            <p>X</p>
          </div>
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
