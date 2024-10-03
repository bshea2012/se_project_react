import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

const RegisterModal = ({ isOpen, closeActiveModal, isLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  return (
    <ModalWithForm
      title="Sign Up"
      //   buttonText={isLoading ? "Signing up..." : "Sign Up"}
      //   buttonText="Sign Up"
      isOpen={isOpen}
      onClose={closeActiveModal}
      //   onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email*{" "}
        <input
          type="text"
          minLength="1"
          maxLength="30"
          className="modal__input"
          id="email"
          placeholder="Email"
          value={email}
          //   onChange={handleNameChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="url"
          minLength="1"
          className="modal__input"
          id="password"
          placeholder="Password"
          value={password}
          //   onChange={handleImageChange}
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name*{" "}
        <input
          type="text"
          minLength="1"
          maxLength="30"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          //   onChange={handleNameChange}
        />
      </label>
      <label htmlFor="avatarUrl" className="modal__label">
        Avatar URL*{" "}
        <input
          type="url"
          minLength="1"
          className="modal__input"
          id="avatarUrl"
          placeholder="Avatar URL"
          value={avatarUrl}
          //   onChange={handleNameChange}
        />
      </label>
      <div className="modal__button-container">
        <button className="modal__submit modal__submit_disabled" type="submit">
          {"Sign Up"}
        </button>
        <button className="modal__submit-option" type="button">
          {"or Log In"}
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
