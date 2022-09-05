// require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");
const PORT = 3001;
const app = express();

const http = require('http');
const server = http.createServer(app);

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes);

// Connect to Mongo DB on local
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'books_db',
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, err => err ? console.log(err) : console.log('Connected to database'));

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));