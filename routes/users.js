const express = require('express');
const app = express();
const bp = require('body-parser');
const route = express.Router();



app.get('/users', (req, res) => {
    console.log('Users route home');
    res.json('Welcome to USERS');
})

module.exports = route;