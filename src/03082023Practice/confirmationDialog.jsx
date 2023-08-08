import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ConfirmationDialog = ({ dialogConfig, setDialogConfig, handleRemoveUserById }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setDialogConfig({
      isOpen: false,
      userId: null,
    });
  };

  console.log(dialogConfig, 'Dialog Config');

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={dialogConfig.isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Removing User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to remove user {dialogConfig.userId}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            No
          </Button>
          <Button onClick={() => handleRemoveUserById(dialogConfig.userId)} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ConfirmationDialog;
