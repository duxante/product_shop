import { useState } from 'react';
import { users } from '../data/users';
import User from './user.component';
import './users.style.css';

const Users = () => {
  const [allUsers, setAllUsers] = useState(users);
  const handleAscending = () => {
    let sortedUsers = allUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
    setAllUsers([...sortedUsers]);
  };

  const handleDescending = () => {
    let sortedUsers = allUsers.sort((a, b) => b.firstName.localeCompare(a.firstName));
    setAllUsers([...sortedUsers]);
  };

  const handleRemoveUserById = (oneProps) => {
    let updatedUsers = allUsers.filter(
      (oneObjectFromArray) => oneObjectFromArray.id !== oneProps
    );
    setAllUsers(updatedUsers);
    console.log(updatedUsers);
  };

  return (
    <>
      <div className="sorting">
        <p onClick={handleAscending}>Ascending</p>
        <p onClick={() => handleDescending()}>Descending</p>
      </div>
      {allUsers.map((oneUser) => {
        return (
          <User
            key={oneUser.id}
            id={oneUser.id}
            firstName={oneUser.firstName}
            lastName={oneUser.lastName}
            email={oneUser.email}
            phoneNumber={oneUser.phoneNumber}
            profileImage={oneUser.profileImage}
            handleRemoveUserById={handleRemoveUserById}
          />
        );
      })}
    </>
  );
};
export default Users;
