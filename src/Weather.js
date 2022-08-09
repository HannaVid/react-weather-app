import React, { useState } from "react";
import "./Weather.css";
import Search from "./images/Search.svg";
import Location from "./images/Location.svg";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.cityDefault);
  const apiKey = "227c2b4793ca0c16e450b597ecdebe79";

  function searchWeatherData() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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

  function handleSearch(event) {
    event.preventDefault();
    if (city) {
      searchWeatherData();
    } else {
      alert("Enter a city name!");
    }
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function getCurrentCoords(event) {
    event.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(searchLocation);
    } else {
      alert("Unable to retrieve your location");
    }
  }
  function searchLocation(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
            autoComplete="off"
            className="search-item"
            onChange={handleCityChange}
          />
          <button className="button-item" onClick={handleSearch}>
            <img
              src={Search}
              width={20}
              height={20}
              alt="Search a city"
              title="Press to know weather"
            ></img>
          </button>
          <button className="button-item" onClick={getCurrentCoords}>
            <img
              src={Location}
              width={20}
              height={20}
              alt="Location dot on the map"
              title="Press to find out weather in your area"
            ></img>
          </button>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    searchWeatherData();
    return "Loading...";
  }
}
