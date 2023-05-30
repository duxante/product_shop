import { Formik } from 'formik';
import Heading from '../../common/heading/heading.component';
import './cartPage.style.css';
import { TextField, colors } from '@mui/material';

const CartPage = () => {
  return (
    <div className="cartPageHolder">
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
          {/* <Formik
            onSubmit={handleAddNewProduct} 
            initialValues={initialAddNewProductValues}
            validationSchema={addNewProductSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit
                }) => (
                    <form className='oneProduct' onSubmit={handleSubmit}>
                        <TextField 
                        label="product Image"
                        name='productImage'
                        onBlur={handleBlur}
                        value={values.productImage}
                        error={Boolean(touched.productImage) && Boolean(errors.productImage)}
                        helperText={touched.productImage && errors.productImage}
                        onChange={handleChange}
                        />
                        <TextField 
                        label="product Name"
                        name='productName'
                        onBlur={handleBlur}
                        value={values.productName}
                        error={Boolean(touched.productName) && Boolean(errors.productName)}
                        helperText={touched.productName && errors.productName}
                        onChange={handleChange}
                        />
                        <TextField 
                        label="product Description"
                        name='productDescription'
                        onBlur={handleBlur}
                        value={values.productDescription}
                        error={Boolean(touched.productDescription) && Boolean(errors.productDescription)}
                        helperText={touched.productDescription && errors.productDescription}
                        onChange={handleChange}
                        />
                        <TextField 
                        label="product Price"
                        name='productPrice'
                        onBlur={handleBlur}
                        value={values.productPrice}
                        error={Boolean(touched.productPrice) && Boolean(errors.productPrice)}
                        helperText={touched.productPrice && errors.productPrice}
                        onChange={handleChange}
                        />
                        <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                        
                    </form>
                )}
          </Formik> */}
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
            <p>Discount</p>
            <p className="discountColor">$-29,00</p>
          </div>
          <hr />
          <div className="totalNumbers">
            <p>Total</p>
            <h3>$3.119,00</h3>
          </div>
          <button className="blueButton">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
