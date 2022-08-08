import React from "react";
import "./Weather.css";
import Search from "./images/Search.svg";
import Location from "./images/Location.svg";

export default function Weather() {
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
        <h1>Saturday</h1>
        <div>Last updated: 16:48</div>
        <h2>London</h2>
        <div className="row">
          <div className="col-6">
            <span className="current-temp">24</span>
            <span className="convert-units">°C | °F</span>
          </div>
          <div className="col-6">
            <img
              src="https://bucolic-biscochitos-41ed06.netlify.app/images/icon/01d.svg"
              alt="Weather icon"
              className="current-img"
            />
          </div>
          <ul className="list-unstyled">
            <li className="description">Clear sky</li>
            <li>Humidity: 32%</li>
            <li>Wind: 2 metre/sec</li>
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
}
