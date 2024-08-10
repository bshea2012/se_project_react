import { useEffect, useRef } from "react";
import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, activeModal, onClose }) {
  const appRef = useRef();

  useEffect(() => {
    const handleRemoteClick = (e) => {
      if (!appRef.current.contains(e.target)) {
        onClose();
        console.log(appRef.current);
      }
    };

    document.addEventListener("onclick", handleRemoteClick);

    return () => {
      document.removeEventListener("onclick", handleRemoteClick);
    };
  }, [onClose]);

  return (
    <div
      ref={appRef}
      className={`modal ${activeModal === "add-garment" && "modal_opened"}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>

        <form className="modal__form">
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
