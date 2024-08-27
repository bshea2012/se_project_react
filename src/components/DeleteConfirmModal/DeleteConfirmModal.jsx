import "./DeleteConfirmModal.css";

function DeleteConfirmModal({ activeModal, onClose, onConfirm, card }) {
  const handleCardDelete = () => {
    onConfirm(card._id);
  };

  return (
    <div className={`modal ${activeModal === "delete" && "modal_opened"}`}>
      <div className="modal__content modal__content-delete">
        <button onClick={onClose} type="button" className="modal__close" />
        <p className="modal__delete_text">
          Are you sure you want to delete this item?
        </p>
        <p className="modal__delete_text">This action is irreversible</p>
        <button
          className="modal__delete_button modal__delete_button-confirm"
          type="submit"
          onClick={handleCardDelete}
        >
          Yes, delete item
        </button>
        <button
          className="modal__delete_button modal__delete_button-cancel"
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
