import { Formik, Form } from 'formik';
import { TextField } from '@mui/material';
import { useState } from 'react';
import './practice.style.css';

const Practice = () => {
  const [result, setResult] = useState(0);
  const initialMultiplyValues = {
    number1: '',
    number2: '',
  };
  const handleMultiply = (values, actions) => {
    let num1 = values.number1;
    let num2 = values.number2;
    if (num1 && num2) {
      let multiplicationResult = num1 * num2;
      setResult(multiplicationResult);
      actions.resetForm();
    }
  };
  return (
    <Formik initialValues={initialMultiplyValues} onSubmit={handleMultiply}>
      {({ handleBlur, handleChange, values, handleSubmit }) => (
        <Form className="totalNumbers" onSubmit={handleSubmit}>
          <TextField
            name="number1"
            label="Number1"
            placeholder={!isNaN ? 'Number1' : 'Invalid input!'}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.number1}
          />
          <TextField
            name="number2"
            label="Number2"
            placeholder={!isNaN ? 'Number2' : 'Invalid input!'}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.number2}
          />
          <button className="blueButton" type="submit">
            Multiply
          </button>
          <p>Result: {result}</p>
        </Form>
      )}
    </Formik>
  );
};

export default Practice;
