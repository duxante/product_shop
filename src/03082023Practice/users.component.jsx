import { useState } from 'react';
import { users } from '../data/users';
import User from './user.component';
import ConfirmationDialog from './confirmationDialog';
import './users.style.css';

const Users = () => {
  const [dialogConfig, setDialogConfig] = useState({
    isOpen: false,
    userId: null,
  });
  const [allUsers, setAllUsers] = useState(users);
  const [deletedUsers, setDeletedUsers] = useState([]);
  const handleAscending = () => {
    let sortedUsers = allUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
    setAllUsers([...sortedUsers]);
  };

  const handleDescending = () => {
    let sortedUsers = allUsers.sort((a, b) => b.firstName.localeCompare(a.firstName));
    setAllUsers([...sortedUsers]);
  };

  const handleRemoveUserById = (oneProps) => {
    const userToRemove = allUsers.find((user) => user.id === oneProps);
    if (userToRemove) {
      setDeletedUsers([...deletedUsers, userToRemove]);
      let updatedUsers = allUsers.filter(
        (oneObjectFromArray) => oneObjectFromArray.id !== oneProps
      );
      setAllUsers(updatedUsers);
      setDialogConfig({
        isOpen: false,
        userId: null,
      });
      console.log(updatedUsers);
    }
  };

  const handleReset = () => {
    setAllUsers([...deletedUsers, ...allUsers]);
    setDeletedUsers([]);
  };

  return (
    <>
      {dialogConfig && (
        <ConfirmationDialog
          dialogConfig={dialogConfig}
          setDialogConfig={setDialogConfig}
          handleRemoveUserById={handleRemoveUserById}
        />
      )}
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
            setDialogConfig={setDialogConfig}
          />
        );
      })}
      <h2>DELETED USERS</h2>
      <button onClick={() => handleReset()}>RESET</button>
      {deletedUsers.map((oneDeletedUser) => {
        return (
          <User
            key={oneDeletedUser.id}
            id={oneDeletedUser.id}
            firstName={oneDeletedUser.firstName}
            lastName={oneDeletedUser.lastName}
            email={oneDeletedUser.email}
            phoneNumber={oneDeletedUser.phoneNumber}
            profileImage={oneDeletedUser.profileImage}
            setDialogConfig={setDialogConfig}
          />
        );
      })}
    </>
  );
};
export default Users;
