const express = require('express');
const app = express();
const location = require('./routes/location');

app.use('/location', location);

const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('listening port: ' + port);
});