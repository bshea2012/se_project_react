import { useState } from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import avatarImg from "../../assets/avatar.png";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="Logo Image" />
        </Link>
        <p className="header__date-loco">
          {currentDate}, {weatherData.city}
        </p>
        <nav
          className={`header__nav_web ${
            mobileMenu ? "header__nav_mobile" : ""
          }`}
        >
          <ToggleSwitch />
          <button className="header__menu_button" type="button"></button>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-button"
          >
            +Add Clothes
          </button>
          <Link to="/profile" className="header__user-link">
            <div className="header__user-container">
              <p className="header__username">Name</p>
              <img
                src={avatarImg}
                alt="Avatar Image"
                className="header__user-avatar"
              />
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
