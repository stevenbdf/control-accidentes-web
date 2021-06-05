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

export default function TransitionsModal({
  open, setOpen, children, closeCallback,
}) {
  const classes = useStyles();

  const handleClose = () => {
    closeCallback();
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
        <div className="w-full md:w-3/4 lg:w-5/12 xl:w-4/12 bg-white p-10 focus:outline-none rounded-lg overflow-y-auto" style={{ maxHeight: '90vh' }}>
          {children}
        </div>
      </Fade>
    </Modal>
  );
}

TransitionsModal.defaultProps = {
  closeCallback: () => { },
};

TransitionsModal.propTypes = {
  open: Proptypes.bool.isRequired,
  setOpen: Proptypes.func.isRequired,
  children: Proptypes.node.isRequired,
  closeCallback: Proptypes.func,
};
