import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleRegisterClick,
  handleLoginClick,
}) {
  const { userData } = React.useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [mobileMenu, setMobileMenu] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenu(!mobileMenu);
  // };

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
          {isLoggedIn && userData ? (
            <>
              <button
                onClick={handleAddClick}
                type="button"
                className="header__add-clothes-button"
              >
                +Add Clothes
              </button>
              <Link to="/profile" className="header__user-link">
                <div className="header__user-container">
                  <p className="header__username">{userData.name}</p>
                  {!userData.avatar ? (
                    <div className="header__avatar-container">
                      <div className="header__user-username-avatar">
                        {userData.name[0]}
                      </div>
                    </div>
                  ) : (
                    <img
                      src={userData.avatar}
                      alt="Avatar Image"
                      className="header__user-avatar"
                    />
                  )}
                </div>
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={handleRegisterClick}
                type="button"
                className="header__sign-up"
              >
                Sign Up
              </button>
              <button
                onClick={handleLoginClick}
                type="button"
                className="header__log-in"
              >
                Log In
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
