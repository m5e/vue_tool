const axios = require('axios');
const express = require('express');

const app = express();

let result = '';
axios.get('http://weather.livedoor.com/forecast/webservice/json/v1?city=400040')
.then(response => {
  result = response;
});

app.get('/', (req, res) => {
  res.json({
    location: result.data.location,
    forecasts:result.data.forecasts,
    text: result.data.description.text,
    publicTime:result.data.publicTime,
    copyright:result.data.copyright
  });

  if (!result.data.description.text) {

    res.status(404).json({
      error: {
          message: 'Not data found.'
      }
    });
  }
});

app.listen(3000, () => console.log('Listening on port 3000'));