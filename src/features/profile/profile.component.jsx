import { Form, Formik } from 'formik';
import { TextField } from '@mui/material';
import Heading from '../../common/heading/heading.component';
import './profile.style.css';

const ProfilePage = () => {
  const initialProfileValues = {
    firstName: 'Spomenko',
    lastName: 'Dukic',
    phoneNumber: '+385981366068',
    dateOfBirth: '19.04.1985.',
    country: 'Croatia',
    city: 'Zagreb',
    postalCode: '10000',
    street: 'Zemunicka 5',
    building: '2',
    entrance: '4F',
    floor: '6th',
    apartment: '612',
    comment: '',
  };

  const handleUpdateProfile = (values) => {};

  return (
    <div className="profilePageHolder">
      <div className="shortPersonalInfo">
        <img
          src="https://i.dailymail.co.uk/1s/2022/08/26/17/61760545-0-image-a-325_1661531382104.jpg"
          alt="gamer screaming"
        />
        <div className="nameAndDateJoinedUnderProfilePhoto">
          <h2>Spomenko Dukic</h2>
          <p>Joined June 6, 2018.</p>
        </div>
      </div>
      <div className="longPersonalInfo">
        <Heading headingText="Personal info" />
        <hr />
        <Formik onSubmit={handleUpdateProfile} initialValues={initialProfileValues}>
          {({ values, handleBlur, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <h2>Contacts</h2>
              <div className="namePhoneBirthInfo">
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
              <h2>Address</h2>
              <div className="namePhoneBirthInfo">
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
              </div>
              <TextField
                className="commentInfo"
                label="Comment"
                name="comment"
                onBlur={handleBlur}
                value={values.comment}
                onChange={handleChange}
              />
              <hr className="bottomBreakLine" />
              <button className="submitButton" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ProfilePage;
