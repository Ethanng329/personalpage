const express = require('express');
const app = express();

app.use('/', express.static(__dirname + 'index.html'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
