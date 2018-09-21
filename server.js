const express = require('express');
const app = express();
const bp = require('body-parser');
const knex = require('knex');
const pg = require('pg');
const Users = require('./routes/users.js');
const Products = require('./routes/products.js');
const Cart = require('./routes/cart.js');

app.use('/users', Users);
app.use('/products', Products);
app.use('/cart', Cart);

app.get('*', (req, res) => {
    console.log('User attempted to get a route/url that does not exist');
    res.json('404');
})

app.listen(3000);