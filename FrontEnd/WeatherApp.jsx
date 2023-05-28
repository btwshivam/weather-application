// WeatherApp.js

import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/weather?location=${location}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {weatherData && (
        <div>
          <h2>Weather for {location}</h2>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Humidity: {weatherData.humidity}</p>
          <p>Condition: {weatherData.condition}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
