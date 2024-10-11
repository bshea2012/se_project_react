import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({
  isOpen,
  onLoginUser,
  closeActiveModal,
  isLoading,
  handleRegisterClick,
}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function resetForm() {
    setData({
      email: "",
      password: "",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginUser(data, resetForm);
  };

  return (
    <ModalWithForm
      title="Log in"
      //   buttonText={isLoading ? "Signing up..." : "Log in"}
      //   buttonText="Log in"
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email*{" "}
        <input
          type="email"
          minLength="1"
          maxLength="30"
          className="modal__input"
          id="emaililogin"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="password"
          minLength="1"
          className="modal__input"
          id="password-login"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
      </label>
      <div className="modal__button-container">
        <button
          className="modal__login-submit modal__login-submit_disabled"
          type="submit"
        >
          {isLoading ? "Logging in..." : "Log in"}
        </button>
        <button
          onClick={handleRegisterClick}
          className="modal__login-submit-option"
          type="button"
        >
          {"or Sign up"}
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
