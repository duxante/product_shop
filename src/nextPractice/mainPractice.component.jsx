import React, { useState } from 'react';
import FormPractice from './formPractice.component';
import DetailPractice from './detailPractice.component';

const MainPractice = () => {
  const [formDetails, setFormDetails] = useState([]);

  const handleFormSubmit = (values, actions) => {
    console.log(formDetails);
    setFormDetails([...formDetails, values]);
    actions.resetForm();
  };

  const handleRemoveUser = (userName) => {
    let updatedUsers = formDetails.filter((oneObject) => oneObject.firstName !== userName);
    setFormDetails(updatedUsers);
  };

  return (
    <div>
      <FormPractice handleFormSubmit={handleFormSubmit} />
      <DetailPractice formData={formDetails} handleRemoveUser={handleRemoveUser} />
    </div>
  );
};

export default MainPractice;
