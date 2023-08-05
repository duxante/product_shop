import './style/user.style.css';

const User = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  profileImage,
  handleRemoveUserById,
  id,
}) => {
  return (
    <div className="userHolder">
      <img src={profileImage} />
      <div className="dataHolder">
        <span className="removeUserbyId" onClick={() => handleRemoveUserById(id)}>
          Remove user
        </span>
        <p>
          {firstName} {lastName}
        </p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
};
export default User;
