
import React from "react";
import { WeatherIcons } from "./constants";
import { WeatherInfoIcons } from "./constants";

const WeatherInfoComponent = ({ name, value }) => (
  <div className="InfoContainer">
    <img className="InfoIcon" src={WeatherInfoIcons[name]} alt={name} />
    <span className="InfoLabel">
      {value}
      <br />
      <span>{name}</span>
    </span>
  </div>
);

const WeatherComponent = ({ weather }) => {
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timestamp) =>
    `${new Date(timestamp * 1000).getHours()} : ${new Date(timestamp * 1000).getMinutes()}`;

  return (
    <div className="WeatherComponent">
      <div className="WeatherContainer">
        <span className="Condition">
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          <br />
          <span> {`    ${weather?.weather[0].description}`} </span>
        </span>
        <img src={WeatherIcons[weather?.weather[0].icon]} alt="Weather Icon" className="weatherimg" />
      </div>
      <span className="Location">{`${weather?.name}, ${weather?.sys?.country}`}</span>
      <div className="WeatherInfoContainer">
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity} />
        <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
        <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure} />
      </div>
    </div>
  );
};

export default WeatherComponent;
