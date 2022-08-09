import React from "react";
import Footer from "./Footer";
import FormatDate from "./FormatDate";
export default function WeatherInfo(props) {
  return (
    <div className="row wrapper">
      <div className="col-12"></div>
      <hr />
      <FormatDate date={props.data.date} />
      <h2>London</h2>
      <div className="row">
        <div className="col-6">
          <span className="current-temp">
            {Math.round(props.data.temperature)}
          </span>
          <span className="convert-units">°C | °F</span>
        </div>
        <div className="col-6">
          <img
            src={props.data.icon}
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
