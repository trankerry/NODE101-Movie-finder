 const express = require('express');
 const morgan = require('morgan');
 const axios = require('axios');

 const PORT = 3000;

 const app = express();
 const API_KEY = '4d3174bd';
 app.use(morgan('dev'));

 //  set up empty cache
 let cache = {};

 app.get('/', (req, res) => {
     let reqURL = req.url;
     let omdbURL = 'http://www.omdbapi.com' + reqURL + '&apikey=' + API_KEY;

     //  if the url is in the cache
     if (cache.hasOwnProperty(reqURL)) {
         //  fetch data from cache
         console.log(cache);
         res.json(cache[reqURL]);
     } else {
         //  get data from the OMBD
         axios.get(omdbURL)
             .then((response) => {
                 console.log(cache[reqURL])
                 cache[reqURL] = response.data;
                 res.json(cache[reqURL]);
             })
             .catch(error => {
                 console.log("ERROR!", error);
             });
         res.status(200);
     }
 });

 module.exports = app;