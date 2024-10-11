import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

const RegisterModal = ({
  isOpen,
  onAddUser,
  closeActiveModal,
  isLoading,
  handleLoginClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    // console.log(e.target.value);
    setAvatar(e.target.value);
  };

  function resetForm() {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser({ email, password, name, avatar }, resetForm);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      //   buttonText={isLoading ? "Signing up..." : "Sign Up"}
      //   buttonText="Sign Up"
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email-register" className="modal__label">
        Email*{" "}
        <input
          type="email"
          minLength="1"
          maxLength="30"
          className="modal__input"
          id="email-register"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="password-register" className="modal__label">
        Password{" "}
        <input
          type="password"
          minLength="1"
          className="modal__input"
          id="password-register"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label htmlFor="name-register" className="modal__label">
        Name*{" "}
        <input
          type="text"
          minLength="1"
          maxLength="30"
          className="modal__input"
          id="name-register"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="avatar-register" className="modal__label">
        Avatar URL*{" "}
        <input
          type="url"
          minLength="1"
          className="modal__input"
          id="avatar-register"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
      <div className="modal__button-container">
        <button
          className="modal__register-submit modal__register-submit_disabled"
          type="submit"
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
        <button
          onClick={handleLoginClick}
          className="modal__register-submit-option"
          type="button"
        >
          {"or Log In"}
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
