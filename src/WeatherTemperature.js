import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="current-temp">{Math.round(props.celsius)}</span>
        <span className="convert-units">
          °C |{" "}
          <a
            href="/"
            onClick={convertToFahrenheit}
            title="Show temperature in fahrenheit"
          >
            °F
          </a>
        </span>
      </div>
    );
  } else
    return (
      <div className="WeatherTemperature">
        <span className="current-temp">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="convert-units">
          °F |{" "}
          <a
            href="/"
            onClick={convertToCelsius}
            title="Show temperature in celsius"
          >
            °C
          </a>
        </span>
      </div>
    );
}
