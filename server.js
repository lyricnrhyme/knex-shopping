const express = require('express');
const app = express();
const bp = require('body-parser');
const knex = require('knex');
const pg = require('pg');
const Users = require('./routes/users.js');
const Products = require('./routes/products.js');
const Cart = require('./routes/cart.js');
const dotenv = require('dotenv');

// app.use('/users', Users);
// app.use('/products', Products);
// app.use('/cart', Cart);

app.get('/', (req, res) => {
    console.log('Dis is homepage');
    res.json('Dis is homepage');
});

app.listen(8000, () => {
    console.log(`Started app on port: ${process.env.EXPRESS_CONTAINER_PORT}`);
});