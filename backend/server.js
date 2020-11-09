const express = require('express');
const cors = require('cors');
// use this later for mongodb connection
const mongoose = require('mongoose');

// initialize express server
const app = express();

// add cors and express middlewares
app.use(cors());
app.use(express.json());

// define server port
const port = process.env.PORT || 5000;

// serve our server into port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});