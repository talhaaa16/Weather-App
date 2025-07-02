import React, { useEffect, useState } from "react";
import "./css/Style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=13a728f60f3d4c3644852685c487a72b`;
      const response = await fetch(url);
      const data = await response.json();
      setCity(data.main); 
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i> {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -Two"></div>
            <div className="wave -Three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
