const express = require('express');
const routes = require('./routes');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/', routes);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})