const express = require('express');
const app = express();
const bp = require('body-parser');
const route = express.Router();



app.get('/cart', (req, res) => {
    console.log('Cart route home');
    res.json('Welcome to CARTS');
})

module.exports = route;