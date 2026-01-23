import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        {title && <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Modal;