const axios = require('axios');
const express = require('express');
const app = express();
// port番号
const port = 3000;

// 天気予報情報取得
let result = '';
axios.get('http://weather.livedoor.com/forecast/webservice/json/v1?city=130010')
  .then(response => {
    result = response;
  });

//天気予報の取得結果を渡す
app.get('/weather', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({
    location: result.data.location,
    forecasts: result.data.forecasts,
    text: result.data.description.text,
    publicTime: result.data.publicTime,
    copyright: result.data.copyright
  });

  if (!result.data.description.text) {
    res.status(404).json({
      error: {
        message: 'Not data found.'
      }
    });
  }
});

// サーバ起動
// eslint-disable-next-line no-console
app.listen(port, () => console.log('Listening on port 3000'));