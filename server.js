const axios = require('axios');
const express = require('express');

// expressアプリを生成する
const app = express();

let re = '';
axios.get('http://weather.livedoor.com/forecast/webservice/json/v1?city=400040')
.then(response => {
  re = response;
});

app.get('/', (req, res) => {
  res.json({location: re.data.location,forecasts:re.data.forecasts, text: re.data.description.text, publicTime:re.data.publicTime, copyright:re.data.copyright});
  if (!re.data.description.text) {

    res.status(404).json({
      error: {
          message: 'Not data found.'
      }
    });
  }
});

app.listen(3000, () => console.log('Listening on port 3000'));