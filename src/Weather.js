import React, { useState } from "react";
import "./Weather.css";
import Search from "./images/Search.svg";
import Location from "./images/Location.svg";
import axios from "axios";

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
      time: "17:28",
      day: "Monday",
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
          <h1>{weatherData.day}</h1>
          <div>Last updated: {weatherData.time}</div>
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

          <footer>
            <ul className="list-unstyled">
              <li>⦁ Coded by Hanna Vidieniova ⦁</li>
              <li>
                Open-source code on{" "}
                <a
                  href="https://github.com/HannaVid/react-weather-app"
                  title="See open-sourced code of the Project on Github"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>{" "}
                and hosted on{" "}
                <a
                  href="https://gilded-biscotti-764a12.netlify.app"
                  title="Check out the Project on Netlify"
                  rel="noreferrer"
                  target="_blank"
                >
                  Netlify
                </a>
              </li>
              <li>2022</li>
            </ul>
          </footer>
        </div>
      </div>
    );
  } else {
    searchWeatherData();
    return "Loading...";
  }
}
