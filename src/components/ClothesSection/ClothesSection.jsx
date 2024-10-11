import React, { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../Main/ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({
  clothingItems,
  onCardClick,
  onAddClick,
  onCardLike,
}) {
  const { userData } = React.useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>
        <button className="clothes-section__button" onClick={onAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems.map((item) => {
          const ownItem = item.owner === userData._id;

          if (ownItem) {
            return (
              <ItemCard
                key={item?._id}
                item={item}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
