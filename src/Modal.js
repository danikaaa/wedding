import React from "react";
import "./Modal.css";

const Modal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="modal" />
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
