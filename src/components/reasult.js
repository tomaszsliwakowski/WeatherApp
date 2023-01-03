import React from "react";
import w1 from "../icons/snow.svg";
import w2 from "../icons/rain.svg";
import w3 from "../icons/fog.svg";
import w4 from "../icons/wind.svg";
import w5 from "../icons/cloudy.svg";
import w6 from "../icons/partly-cloudy-day.svg";
import w7 from "../icons/partly-cloudy-night.svg";
import w8 from "../icons/clear-day.svg";
import w9 from "../icons/clear-night.svg";

const Reasult = ({ weather, city }) => {
  let date = new Date();
  let nowdate = date.toLocaleDateString();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const Iconweather = () => {
    switch (weather.icon) {
      case "snow":
        return <img src={w1} alt="snow" />;
      case "rain":
        return <img src={w2} alt="rain" />;
      case "fog":
        return <img src={w3} alt="fog" />;
      case "wind":
        return <img src={w4} alt="wind" />;
      case "cloudy":
        return <img src={w5} alt="cloudy" />;
      case "partly-cloudy-day":
        return <img src={w6} alt="partly-cloudy-day" />;
      case "partly-cloudy-night":
        return <img src={w7} alt="partly-cloudy-night" />;
      case "clear-day":
        return <img src={w8} alt="clear-day" />;
      case "clear-night":
        return <img src={w9} alt="clear-night" />;
    }
  };

  return (
    <div className="reasult">
      <div className="weather_info">
        <ul>
          <li className="temp">
            <p>{weather.temp} &#8451;</p>
          </li>
          <li className="city">{city}</li>
          <li>
            <h3>{hours + ":" + minutes}</h3> <p>{nowdate}</p>
          </li>
        </ul>
      </div>
      <div className="weather_img">{<Iconweather />}</div>
    </div>
  );
};

export default Reasult;
