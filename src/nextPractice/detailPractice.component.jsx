import React from 'react';

const DetailPractice = ({ firstName, lastName, formData }) => {
  return (
    <div>
      <h2>Details:</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
    </div>
  );
};

export default DetailPractice;
