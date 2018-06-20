var express = require('express');
var app = express();

app.get('/', (req, res) => {
  var milliseconds = (new Date).getTime();
  console.log('xx');
  res.send('time is' + milliseconds);
});

app.listen(3000, () => console.log('started'));