import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import avatarImg from "../../assets/avatar.png";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Logo Image" />
      <p className="header__date-loco">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-button"
      >
        +Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Name</p>
        <img
          src={avatarImg}
          alt="Avatar Image"
          className="header__user-avatar"
        />
      </div>
    </header>
  );
}

export default Header;
