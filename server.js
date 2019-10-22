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
  res.send('hello')
  console.log('re', re);
});

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));