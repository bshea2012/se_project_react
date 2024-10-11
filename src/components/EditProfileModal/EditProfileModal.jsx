import React, { useState, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({
  isOpen,
  closeActiveModal,
  isLoading,
  onEditProfile,
}) => {
  const { userData } = React.useContext(CurrentUserContext);

  const [data, setData] = useState({
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // debugger;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (userData) {
      setData(userData);
    }
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfile(data);
  };

  return (
    <ModalWithForm
      title="Change profile data"
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name-edit" className="modal__label">
        Name*{" "}
        <input
          type="text"
          minLength="1"
          maxLength="30"
          className="modal__input"
          id="name-edit"
          name="name"
          value={data?.name}
          placeholder="Name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="avatar-edit" className="modal__label">
        Avatar URL*{" "}
        <input
          type="url"
          minLength="1"
          className="modal__input"
          id="avatar"
          name="avatar-edit"
          placeholder="Avatar URL"
          value={data?.avatar}
          onChange={handleChange}
        />
      </label>
      <button
        className="modal__edit-submit modal__submit_disabled"
        type="submit"
      >
        {isLoading ? "Saving..." : "Save changes"}
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
