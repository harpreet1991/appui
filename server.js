const express = require('express');
const app = express();
var router = express.Router();

app.use(express.static(__dirname + '/dist/first-app'));
app.get('*', function (req, res) {
  res.sendfile('./dist/first-app/index.html'); });

port = process.env.PORT || 8080;

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);