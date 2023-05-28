// server.js

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/weather', async (req, res) => {
  try {
    const location = req.query.location;
    const apiKey = 'YOUR_API_KEY';

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );

    const { main, weather } = response.data;
    const weatherData = {
      temperature: main.temp,
      humidity: main.humidity,
      condition: weather[0].description,
    };

    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
