const express = require('express');
const app = express();
const bp = require('body-parser');
const route = express.Router();



app.get('/products', (req, res) => {
    console.log('Products route home');
    res.json('Welcome to PRODUCTS');
})

module.exports = route;