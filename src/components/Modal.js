import React from 'react'

const Modal = ({ imageUrl, onClose, fadeIn }) => {
    return (
      <div className={`modal-overlay ${fadeIn ? "fade-in" : ""}`} onClick={onClose}>
        <div className={`modal-content ${fadeIn ? "fade-in" : ""}`}>
          <img src={imageUrl} alt="Modal" className="modal-image" />
        </div>
      </div>
    );
  };

export default Modal