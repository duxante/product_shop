import './style/checkoutDetails.style.css';
import * as React from 'react';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { FormControl, FormControlLabel, Checkbox, TextField } from '@mui/material';
import Heading from '../../../common/heading/heading.component';
import Notification from '../../../common/notification/notification.component';
import { useNavigate } from 'react-router-dom';

const CheckoutDetails = () => {
  const navigate = useNavigate();
  const [notificationConfig, setNotificationConfig] = useState({
    text: '',
    severity: '',
    visible: false,
  });
  const initialContactValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    country: '',
    city: '',
    postalCode: '',
    street: '',
    building: '',
    entrance: '',
    floor: '',
    apartment: '',
    comment: '',
    paymentUponReceive: false,
    paymentByCard: false,
  };

  const handleUpdateCheckoutDetails = (values, actions) => {
    console.log(values);
    setNotificationConfig({
      text: 'Item successfully ordered!',
      severity: 'success',
      visible: true,
    });
    actions.resetForm();
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };
  return (
    <div className="checkoutDetailsHolder">
      {notificationConfig.visible && (
        <Notification
          notificationConfig={notificationConfig}
          setNotificationConfig={setNotificationConfig}
        />
      )}
      <Heading headingText="Checkout" />
      <hr />
      <Formik onSubmit={handleUpdateCheckoutDetails} initialValues={initialContactValues}>
        {({ values, handleBlur, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <h2>1. Contact Information</h2>
            <div className="checkoutUserInfo">
              <div className="checkoutPadding">
                <TextField
                  label="First Name"
                  name="firstName"
                  onBlur={handleBlur}
                  value={values.firstName}
                  onChange={handleChange}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  onBlur={handleBlur}
                  value={values.lastName}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone Number"
                  name="phoneNumber"
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
                <TextField
                  label="Date Of Birt"
                  name="dateOfBirth"
                  onBlur={handleBlur}
                  value={values.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
            </div>
            <h2>2. Shipping</h2>
            <div className="checkoutUserInfo">
              <div className="checkoutPadding">
                <TextField
                  label="Country"
                  name="country"
                  onBlur={handleBlur}
                  value={values.country}
                  onChange={handleChange}
                />
                <TextField
                  label="City"
                  name="city"
                  onBlur={handleBlur}
                  value={values.city}
                  onChange={handleChange}
                />
                <TextField
                  label="Postal Code"
                  name="postalCode"
                  onBlur={handleBlur}
                  value={values.postalCode}
                  onChange={handleChange}
                />
                <TextField
                  label="Street"
                  name="street"
                  onBlur={handleBlur}
                  value={values.street}
                  onChange={handleChange}
                />
                <TextField
                  label="Building"
                  name="building"
                  onBlur={handleBlur}
                  value={values.building}
                  onChange={handleChange}
                />
                <TextField
                  label="Entrance"
                  name="entrance"
                  onBlur={handleBlur}
                  value={values.entrance}
                  onChange={handleChange}
                />
                <TextField
                  label="Floor"
                  name="floor"
                  onBlur={handleBlur}
                  value={values.floor}
                  onChange={handleChange}
                />
                <TextField
                  label="Apartment"
                  name="apartment"
                  onBlur={handleBlur}
                  value={values.apartment}
                  onChange={handleChange}
                />
                <TextField
                  className="commentInfo"
                  label="Comment"
                  name="comment"
                  onBlur={handleBlur}
                  value={values.comment}
                  onChange={handleChange}
                />
              </div>
            </div>
            <h2>3. Payment</h2>
            <FormControl className="paymentHolder">
              <div className="paymentOptions">
                <FormControlLabel
                  control={
                    <Checkbox
                      name="paymentUponReceive"
                      checked={values.paymentUponReceive}
                      onChange={handleChange}
                    />
                  }
                  label="Payment Upon Receive"
                />
              </div>
              <div className="paymentOptions">
                <FormControlLabel
                  control={
                    <Checkbox
                      name="paymentByCard"
                      checked={values.paymentByCard}
                      onChange={handleChange}
                    />
                  }
                  label="Payment By Card"
                />
              </div>
            </FormControl>
            <button className="checkoutSubmitButton" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutDetails;
