const express = require('express');
const app = express();
const bp = require('body-parser');
const knex = require('knex');
const pg = require('pg');
const Users = require('./routes/users.js');
const Products = require('./route/products.js');
const Cart = require('./routes/cart.js');

app.use(bp.urlencoded({extended: true}));
app.use(knex);
app.use(pg);

app.get('/users', (req, res) => {
    res.render(Users);
})

app.get('/products', (req, res) => {
    res.render(Products);
})

app.get('/cart', (req, res) => {
    res.render(Cart);
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000');
})