import { Formik, Form } from 'formik';
import { TextField } from '@mui/material';
import { useState } from 'react';
import './practice.style.css';

const Practice = () => {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const [result, setResult] = useState(null);
  const initialMultiplyValues = {
    number1: '',
    number2: '',
  };
  const handleMultiply = (values, actions) => {
    console.log(values);
    let multiplicationResult = values.number1 * values.number2;
    setResult(multiplicationResult);
    actions.resetForm();
  };
  return (
    <>
      <div className="someTextForPractice">
        {isParagraphVisible && (
          <p className="someText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, veniam
            necessitatibus nobis ea accusamus ullam optio, aspernatur commodi numquam fugiat quas
            earum. Veritatis, magnam rem! Iste quod quo quaerat iure.
          </p>
        )}
        <button className="blueButton" onClick={() => setIsParagraphVisible(true)}>
          Show
        </button>
        <button className="blueButton" onClick={() => setIsParagraphVisible(false)}>
          Hide
        </button>
      </div>
      <span className={result != null ? 'zelena' : 'crvena'}></span>
      {result == null ? <h2>Započni kalkulaciju</h2> : <h2>Tvoj rezultat je: {result}</h2>}
      <Formik initialValues={initialMultiplyValues} onSubmit={handleMultiply}>
        {({ handleBlur, handleChange, values, handleSubmit }) => (
          <Form className="totalNumbers" onSubmit={handleSubmit}>
            <TextField
              type="number"
              name="number1"
              label="Number1"
              placeholder="Unesi broj"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.number1}
            />
            <TextField
              type="number"
              name="number2"
              label="Number2"
              placeholder="Unesi broj"
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
    </>
  );
};

export default Practice;
