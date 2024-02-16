const express = require('express');
const app = express();

const routerProduct = require('./routes/product');
const routerOrder = require('./routes/order');

app.use('/products', routerProduct);
app.use('/orders', routerOrder);

module.exports = app;