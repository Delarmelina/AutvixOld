// Import Packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const allowCors = require('./config/cors');

const app = express()
const URLBase = 3003

// Config JSON
app.use(express.json());

// Configure Cors
app.use(allowCors);
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token')
    next();
});

app.use(require('./routes/users'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        app.listen(URLBase)
        console.log(`Connected to the database at port ${URLBase}`)
    })
    .catch(err => console.log(err))
