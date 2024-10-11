import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  handleAddButtonClick,
  handleItemClick,
  clothingItems,
  handleEditProfileClick,
  handleLogout,
  onCardLike,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleEditProfileClick={handleEditProfileClick}
          handleLogout={handleLogout}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={handleItemClick}
          onAddClick={handleAddButtonClick}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
