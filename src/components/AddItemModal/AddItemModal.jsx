import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { Link } from "react-router-dom";

const AddItemModal = ({ isOpen, onAddItem, closeActiveModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    // console.log(e.target.value);
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    // console.log(e.target.value);
    setWeather(e.target.value);
  };

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened
  //   useEffect(() => {
  //     if (isOpen) {
  //       setName("");
  //       setImageUrl("");
  //       setWeather("");
  //     }
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          minLength="1"
          maxLength="30"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image URL{" "}
        <input
          type="url"
          minLength="1"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleImageChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            name="weather"
            id="hot"
            type="radio"
            className="modal__radio-input"
            value="hot"
            onChange={handleWeatherChange}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            name="weather"
            id="warm"
            type="radio"
            className="modal__radio-input"
            value="warm"
            onChange={handleWeatherChange}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            name="weather"
            id="cold"
            type="radio"
            className="modal__radio-input"
            value="cold"
            onChange={handleWeatherChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
