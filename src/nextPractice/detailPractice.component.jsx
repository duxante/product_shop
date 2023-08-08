import React from 'react';

const DetailPractice = ({ formData, handleRemoveUser }) => {
  return (
    <div>
      <h2>Details:</h2>
      {formData.map((data, index) => (
        <p key={index}>
          Korisnik {index + 1}: {data.firstName + ` ` + data.lastName}
          <span onClick={() => handleRemoveUser(data.firstName)}> X</span>
        </p>
      ))}
    </div>
  );
};

export default DetailPractice;
