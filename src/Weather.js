import React, { useState } from "react";
import "./Weather.css";
import Search from "./images/Search.svg";
import Location from "./images/Location.svg";
import axios from "axios";
import FormatDate from "./FormatDate";
import Footer from "./Footer";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function searchWeatherData() {
    const apiKey = "227c2b4793ca0c16e450b597ecdebe79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityDefault}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description.toUpperCase(),
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeHolder="Enter a city..."
            autoFocus="on"
            autoComplete="off"
            className="search-item"
          />
          <button type="submit" className="button-item">
            <img
              src={Search}
              width={20}
              height={20}
              alt="Search a city"
              title="Press to know weather"
            ></img>
          </button>
          <button type="submit" className="button-item">
            <img
              src={Location}
              width={20}
              height={20}
              alt="Location dot on the map"
              title="Press to find out weather in your area"
            ></img>
          </button>
        </form>
        <div className="row wrapper">
          <div className="col-12"></div>
          <hr />
          <FormatDate date={weatherData.date} />
          <h2>London</h2>
          <div className="row">
            <div className="col-6">
              <span className="current-temp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="convert-units">°C | °F</span>
            </div>
            <div className="col-6">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="current-img"
              />
            </div>
            <ul className="list-unstyled">
              <li className="description">Clear sky</li>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Wind: {Math.round(weatherData.wind)} metre/sec</li>
            </ul>
          </div>
          <hr />
          <Footer />
        </div>
      </div>
    );
  } else {
    searchWeatherData();
    return "Loading...";
  }
}
