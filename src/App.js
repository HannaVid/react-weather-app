import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        This project was coded by Hanna Vidieniova and is {" "}
        <a href="https://github.com/HannaVid/react-weather-app" title="See open-sourced code of the Project on Github" rel="noreferrer" target="_blank">open-sourced code on GitHub</a> 
      </footer>
      </div>
    </div>
  );
};
