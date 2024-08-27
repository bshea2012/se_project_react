import React, { useState, useContext } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(
    CurrentTemperatureUnitContext
  );

  // const [tempUnit, setTempUnit] = useState("F");

  // const handleTempChange = (e) => {
  //   if (tempUnit === "F") {
  //     setTempUnit("C");
  //   }
  //   if (tempUnit === "C") {
  //     setTempUnit("F");
  //   }
  // };

  return (
    <label className="toggle__container">
      <input
        type="checkbox"
        className="toggle__checkbox"
        onClick={handleToggleSwitchChange}
      />
      <span
        className={`toggle__button ${
          currentTemperatureUnit === "C" && "toggle__button-C"
        }`}
      />
      <p
        className={`toggle__temp-F ${
          currentTemperatureUnit === "F" && "toggle__active"
        }`}
      >
        F
      </p>
      <p
        className={`toggle__temp-C ${
          currentTemperatureUnit === "C" && "toggle__active"
        }`}
      >
        C
      </p>
    </label>
  );
}

export default ToggleSwitch;
