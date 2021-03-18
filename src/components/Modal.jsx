import React from 'react';
import Proptypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function TransitionsModal({ open, setOpen, children }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="w-4/12 bg-white p-10 focus:outline-none rounded-lg">
          {children}
        </div>
      </Fade>
    </Modal>
  );
}

TransitionsModal.propTypes = {
  open: Proptypes.bool.isRequired,
  setOpen: Proptypes.func.isRequired,
  children: Proptypes.node.isRequired,
};
