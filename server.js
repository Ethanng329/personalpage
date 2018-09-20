const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/images', express.static(__dirname + '/images'));

// app.get('/', function(req, res) {
//   // ejs render automatically looks in the views folder
//   res.sendFile('index');
// });
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
