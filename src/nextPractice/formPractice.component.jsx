import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '@mui/material';

const FormPractice = ({ handleFormSubmit }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ handleBlur, handleChange, values, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
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

          <button className="blueButton" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormPractice;
