import React, { useRef } from "react";
import "../css/modal.css";

function Modal({ show, onClose }) {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
  
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    } else if (e.nativeEvent.inputType === 'deleteContentBackward' && index > 0) {
      // If backspace is pressed and the current input box is not the first one
      inputRefs.current[index - 1].focus();
    }
  };
  
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
        </div>
        <div className="modal-body">
          <p className="otp-text">Check Your Registered Email For OTP</p>
          <div className="otp-inputs">
            {Array(4).fill().map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleInputChange(e, index)}
              />
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
