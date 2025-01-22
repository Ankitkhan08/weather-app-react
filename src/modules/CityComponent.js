
import React from "react";

const CityComponent = ({ updateCity, fetchWeather, history }) => {
  return (
    <div className="CityComponent">
      <img
        src="/react-weather-app/icons/perfect-day.svg"
        alt="Welcome Logo"
        className="WelcomeLogo"
      />
      <form className="SearchBox" onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="Enter City"
        />
        <button type="submit">Search</button>
      </form>
      <div className="HistoryContainer">
        <span className="HistoryLabel">Search History:</span>
        <ul className="HistoryList">
          {history.map((city, index) => (
            <li key={index} className="HistoryItem">
              <span>{city} </span> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CityComponent;
