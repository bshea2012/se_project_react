import { useEffect, useRef } from "react";
import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, activeModal, onClose }) {
  useEffect(() => {
    const handleRemoteClick = (e) => {
      if (e.target.classList.contains("modal")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleRemoteClick);

    return () => {
      document.removeEventListener("mousedown", handleRemoteClick);
    };
  }, [onClose]);

  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>

        <form className="modal__form">
          {children}
          <button
            className="modal__submit modal__submit_disabled"
            type="submit"
            disabled
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
