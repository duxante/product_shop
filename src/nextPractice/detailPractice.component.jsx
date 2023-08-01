import React from 'react';

const DetailPractice = ({ formData }) => {
  return (
    <div>
      <h2>Details:</h2>
      {formData.map((data, index) => (
        <p key={index}>
          Korisnik {index + 1}: {data.firstName + ` ` + data.lastName}
        </p>
      ))}
    </div>
  );
};

export default DetailPractice;
