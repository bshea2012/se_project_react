import React, { useContext } from "react";
import "./ItemCard.css";
import likeDisabled from "../../../assets/like_disabled.svg";
import likeActive from "../../../assets/like_active.svg";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const { userData } = React.useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike(item, isLiked);
  };

  const isLiked = item.likes.some((id) => id === userData._id);

  const likeButton = !isLiked
    ? "card__like-button"
    : "card__like-button_active";

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__title">{item.name}</h2>
        <button type="button" className={likeButton} onClick={handleLike} />
      </div>

      <img
        onClick={handleCardClick}
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;
