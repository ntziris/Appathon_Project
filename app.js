const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoUri = require('./config/databaseUrl');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    app.listen(3000);
  })
  .catch(error => {
    console.log(error);
  });
