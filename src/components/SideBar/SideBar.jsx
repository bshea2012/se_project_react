import React, { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ handleEditProfileClick, handleLogout }) {
  const { userData } = React.useContext(CurrentUserContext);

  return (
    <>
      <div className="sidebar">
        {!userData.avatar ? (
          <div className="sidebar__avatar-container">
            <div className="sidebar__user-username-avatar">
              {userData.name[0]}
            </div>
          </div>
        ) : (
          <img
            className="sidebar__avatar"
            src={userData.avatar}
            alt="Avatar Image"
          />
        )}
        <p className="sidebar__username">{userData.name}</p>
      </div>
      <div className="sidebar__options">
        <button
          className="sidebar__profile-edit"
          type="button"
          onClick={handleEditProfileClick}
        >
          Change profile data
        </button>
        <button
          onClick={handleLogout}
          className="sidebar__log-out"
          type="button"
        >
          Log out
        </button>
      </div>
    </>
  );
}

export default SideBar;
