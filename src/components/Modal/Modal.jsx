import "./Modal.scss";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-button" onClick={onClose}>
          <MdOutlineClose size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
