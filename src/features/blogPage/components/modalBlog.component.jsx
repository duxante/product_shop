import './style/modalBlog.style.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const ModalBlog = ({ modalData, isVisible, handleCloseModal }) => {
  console.log(modalData);
  return (
    <div>
      <Modal
        open={isVisible}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <div className="modalInsideBox">
            <p className="closeModal" onClick={handleCloseModal}>
              X
            </p>
            <img className="modalImage" src={modalData.img} />
            <div className="authorAndDate">
              <p>Datum: {modalData.date}</p>
              <p>Autor: {modalData.author}</p>
            </div>
            <h2 className="titleAndDescription">{modalData.blogTitle}</h2>
            <p className="titleAndDescription">{modalData.blogDescription}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalBlog;
