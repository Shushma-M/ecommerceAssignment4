import './Modal.css';

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* <button className="close-btn" onClick={onClose}>X</button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;