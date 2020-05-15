const express = require('express');
const path = require('path');

// Initializations
const app = express();

// Settings
const pathPublic = path.resolve(__dirname, './storage/img/');

// Middleware
app.use('/public/', express.static(pathPublic));

app.use(express.urlencoded({ extended: false }));

// router
app.use(require('./routes/products'));

module.exports = app;
