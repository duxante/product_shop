import { Formik, Form } from 'formik';
import { TextField } from '@mui/material';
import { useState } from 'react';
import './practice.style.css';
import Comp1 from './comp1.component';
import Comp2 from './comp2.component';

const Practice = () => {
  const [isCompVisible, setIsCompVisible] = useState(false);
  console.log(isCompVisible);
  /* const [isParagraphVisible, setIsParagraphVisible] = useState(false);
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
  }; */

  const handleCompVisible = (arg) => {
    setIsCompVisible(arg);
  };

  return (
    <>
      <Comp1 handleCompVisible={handleCompVisible} />

      <Comp2 isCompVisible={isCompVisible} />
      {/* <div className="someTextForPractice">
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
        <button
          onClick={() => {
            !isParagraphVisible ? setIsParagraphVisible(true) : setIsParagraphVisible(false);
          }}
        >
          Show/Hide
        </button>
        <button onClick={() => setIsParagraphVisible(!isParagraphVisible)}>
          {isParagraphVisible ? 'Hide' : 'Show'}
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
      </Formik> */}
    </>
  );
};

export default Practice;
