const express = require('express');
const cors = require('cors');
// use this later for mongodb connection
const mongoose = require('mongoose');

// configure environment variables
require('dotenv').config();

// initialize express server
const app = express();

// add cors and express middlewares
app.use(cors());
app.use(express.json());

const mongodb_uri = process.env.MONGODB_URI;

// connect to mongodb w/ mongoose
mongoose.connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Successfully connected to MongoDB...");
})

// define server port
const port = process.env.PORT || 5000;

// serve our server into port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});