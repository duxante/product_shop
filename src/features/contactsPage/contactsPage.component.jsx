import Heading from '../../common/heading/heading.component';
import './contactsPage.style.css';
import phoneCall from '../../assets/phoneCall.png';
import mailUs from '../../assets/mailUs.png';
import location from '../../assets/location.png';
import workingHours from '../../assets/workingHours.png';
import { ContactPageLaptopImage } from '../../assets';
import { Form, Formik, Field } from 'formik';
import { TextField, MenuItem } from '@mui/material';

const ContactsPage = () => {
  const initialContactFormValues = {
    name: '',
    email: '',
    topic: 'Choose Option',
    message: '',
  };
  const handleContactFormInquiry = (values) => {
    console.log(values);
  };
  return (
    <>
      <Heading headingText="Contacts" />
      <div className="contactsPageHolder">
        <ContactPageLaptopImage />
        <div className="storeAndFeedbackHolder">
          <div className="store">
            <h3>Store</h3>
            <div className="imagesAndData">
              <img src={phoneCall} alt="" />
              <p>808-955-8441</p>
            </div>
            <div className="imagesAndData">
              <img src={mailUs} alt="" />
              <p>example@honolulu.com</p>
            </div>
            <div className="imagesAndData">
              <img src={location} alt="" />
              <p>Keeaumoku St, Honolulu, HI 96814</p>
            </div>
            <div className="imagesAndData">
              <img src={workingHours} alt="" />
              <p>Daily 10:00 - 22:00h</p>
            </div>
          </div>
          <div className="feedback">
            <h3>Feedback</h3>
            <div className="departmentMails">
              <h3>COOPERATION</h3>
              <p>cooperation@example.com</p>
            </div>
            <div className="departmentMails">
              <h3>PARTNERS</h3>
              <p>partner@example.com</p>
            </div>
            <div className="departmentMails">
              <h3>PRESS</h3>
              <p>press@example.com</p>
            </div>
          </div>
        </div>
        <div className="contactUsFormHolder">
          <h2>Contact Us</h2>
          <Formik onSubmit={handleContactFormInquiry} initialValues={initialContactFormValues}>
            {({ values, handleBlur, handleChange, handleSubmit }) => (
              <Form className="justFormParent" onSubmit={handleSubmit}>
                <div className="justForm">
                  <TextField
                    label="Name"
                    name="name"
                    onBlur={handleBlur}
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Your Name..."
                  />
                  <TextField
                    label="Email"
                    name="email"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Your Email..."
                  />
                  <Field
                    name="topic"
                    as={TextField}
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    select
                    placeholder="Choose Option..."
                    label="Choose Topic"
                    variant="outlined"
                  >
                    <MenuItem value="E-Commerce Support">E-Commerce Support</MenuItem>
                    <MenuItem value="Online Orders">Online Orders</MenuItem>
                    <MenuItem value="Sales&Marketing">Sales & Marketing</MenuItem>
                    <MenuItem value="Cult of E-Commerce">Cult of E-Commerce</MenuItem>
                  </Field>
                  <TextField
                    label="Message"
                    name="message"
                    onBlur={handleBlur}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Write Message..."
                  />
                </div>
                <button type="submit" className="blueButton">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
          {/* <form className="justForm">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Your Name..." />
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Your Email Address..." />
            <label htmlFor="topic">Topic</label>
            <select name="Topic" id="">
              <option value="Choose Option">Choose Option...</option>
              <option value="E-Commerce Support">E-Commerce Support</option>
              <option value="Online Orders">Online Orders</option>
              <option value="Sales&Marketing">Sales & Marketing</option>
              <option value="Cult of E-Commerce">Cult of E-Commerce</option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea
              name="subject"
              placeholder="Write Message..."
              id=""
              cols="40"
              rows="10"
            ></textarea>
          </form> */}
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
