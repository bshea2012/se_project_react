import "./ItemModal.css";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";

function ItemModal({
  activeModal,
  onClose,
  card,
  onDeleteClick,
  handleCardDelete,
}) {
  const handleDeleteConfirm = () => {
    onDeleteClick(card._id);
  };

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_image">
        <button onClick={onClose} type="button" className="modal__close" />
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            className="modal__delete"
            type="button"
            onClick={handleDeleteConfirm}
          >
            Delete item
          </button>
        </div>
      </div>
      <DeleteConfirmModal
        activeModal={activeModal}
        onClose={onClose}
        onConfirm={handleCardDelete}
        card={card}
      />
    </div>
  );
}

export default ItemModal;
