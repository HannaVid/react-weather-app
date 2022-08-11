import React from "react";
import Footer from "./Footer";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="row wrapper">
      <div className="col-12"></div>
      <hr />
      <FormatDate date={props.data.date} />
      <h2>{props.data.city}</h2>
      <div className="row">
        <div className="col-6">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <img
            src={props.data.icon}
            // src="icons/01d.svg"

            alt={props.data.description}
            className="current-img"
          />
        </div>
        <ul className="list-unstyled">
          <li className="description">Clear sky</li>
          <li>Humidity: {Math.round(props.data.humidity)}%</li>
          <li>Wind: {Math.round(props.data.wind)} metre/sec</li>
        </ul>
      </div>
      <hr />
      <Footer />
    </div>
  );
}
