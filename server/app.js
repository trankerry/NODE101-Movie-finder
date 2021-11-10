const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const api_key = process.env.API_KEY;

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

app.get('/?i=tt3896198', function(req, res) {
    res.status(200).send('http://www.omdbapi.com/?i=tt3896198&apikey=4d3174bd')
})

app.get('/?t=baby%20driver', function(req, res) {
    res.status(200).send('http://www.omdbapi.com/?t=baby%20driver&apikey=4d3174bd')
}); 

// app.get(`?i=${api_key}`, function(req, res) {
//     res.
// })

module.exports = app;