import React, { useState } from "react";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import "./App.css";


function App() {
  const [city, updateCity] = useState("");
  const [weather, updateWeather] = useState();
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchWeather = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
      );
      console.log(response.data.main.temp)
      updateWeather(response.data);
      if (!history.includes(city)) {
        setHistory((prev) => [city , ...prev.slice(0, 4)]);
      }
    } catch (err) {
      setError("Failed to fetch weather data. Please check the city name and try again.");
    }
  };

  return (
    <div className="AppContainer">
      {error && <span className="ErrorMessage">{error}</span>}
      <div className="MainContainer">
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} history={history} />
        {weather && <WeatherComponent weather={weather} />}
      </div>
    </div>
  );
}

export default App;
