import { useState } from "react";
import Reasult from "./reasult";
import options from "./api";

const Search = () => {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState(false);
  const [cityname, setcityname] = useState("");

  const handleChangeCity = (e) => {
    setcity(e.target.value);
  };
  const handlesetapi = (e) => {
    if (e.key === "Enter") {
      if (city === "") {
        setweather("");
      }
      fetch(
        `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${city}&contentType=json&unitGroup=uk&shortColumnNames=0`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setcityname(data.locations[city].address);
          setweather(data.locations[city].currentConditions);
          setcity("");
        })
        .catch((err) => console.error(err));
    }
  };
  console.log(weather);
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Wyszukaj..."
          value={city}
          className="search_input"
          onChange={handleChangeCity}
          onKeyPress={handlesetapi}
        />
      </div>
      {weather ? (
        <Reasult weather={weather} city={cityname} />
      ) : (
        <h3 className="empty">Wybierz miasto</h3>
      )}
    </>
  );
};

export default Search;
