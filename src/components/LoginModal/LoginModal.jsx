import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({ isOpen, closeActiveModal, isLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ModalWithForm
      title="Log in"
      //   buttonText={isLoading ? "Signing up..." : "Log in"}
      //   buttonText="Log in"
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
      <div className="modal__button-container">
        <button className="modal__submit modal__submit_disabled" type="submit">
          {"Log in"}
        </button>
        <button className="modal__submit-option" type="button">
          {"or Sign up"}
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
