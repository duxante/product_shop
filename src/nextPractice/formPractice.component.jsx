import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '@mui/material';
import * as Yup from 'yup';

const FormPractice = ({ handleFormSubmit }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
  };

  const getValidationSchema = () =>
    Yup.object().shape({
      firstName: Yup.string().required('First Name is required!'),
      lastName: Yup.string().required('Last Name is required!'),
    });

  const ValidationSchema = getValidationSchema();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={ValidationSchema}
    >
      {({ handleBlur, handleChange, values, handleSubmit, touched, errors }) => (
        <Form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            onBlur={handleBlur}
            value={values.firstName}
            onChange={handleChange}
            error={!!touched.firstName && !!errors.firstName}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            label="Last Name"
            name="lastName"
            onBlur={handleBlur}
            value={values.lastName}
            onChange={handleChange}
            error={!!touched.lastName && !!errors.lastName}
            helperText={touched.lastName && errors.lastName}
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
