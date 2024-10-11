import React, { useContext } from "react";
import "./ItemModal.css";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({
  activeModal,
  onClose,
  card,
  onDeleteClick,
  handleCardDelete,
}) {
  const { userData } = React.useContext(CurrentUserContext);

  const isOwn = card.owner === userData._id;

  const itemDeleteButtonClassName = `modal__delete ${
    activeModal === "preview" && isOwn
      ? "modal__delete-button_visible"
      : "modal__delete-button_hidden"
  }`;

  const handleDeleteConfirm = () => {
    onDeleteClick(card?.id);
    !isOwn;
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
            className={itemDeleteButtonClassName}
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
