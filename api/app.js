// Import Packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const allowCors = require('./config/cors');

const app = express()
const URLBase = 3003

// Config JSON
app.use(express.json());

// Configure Cors
app.use(allowCors);

// Models
const User = require('./models/user');

// Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    })
})

// Open Route - Users List
app.get('/users', (req, res) => {

    User.find()
        .then(users => {
            users.map(user => {
                user.password = undefined
            })
            res.status(200).json({
                users
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

// Private Route - Protected Route
app.get('/user/:id', async (req, res) => {

    const id = req.params.id;
    const user = await User.findById(id, '-password');

    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        })
    }

    res.status(200).json({
        user
    })
})

function checkToken(req, res, next) {
    const header = req.headers['authorization'];
    const token = header && header.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: 'Access Denied'
        })
    }

    try {
        jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    } catch (err) {
        res.status(400).json({
            message: 'Invalid Token'
        })
    }
}

// Register User
app.post('/auth/register', async (req, res) => {

    const { name, email, password, confirmpassword } = req.body

    // Validation
    if (!name) {
        return res.status(422).json({ msg: 'Name is required' });
    }

    if (!email) {
        return res.status(422).json({ msg: 'Email is required' });
    }

    if (!password) {
        return res.status(422).json({ msg: 'Password is required' });
    }

    if (password !== confirmpassword) {
        return res.status(422).json({ msg: 'Password does not match' });
    }

    // Check if user already exists
    const userExist = await User.findOne({ email });

    if (userExist) {
        return res.status(422).json({ msg: 'User already exists' });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const user = new User({
        name,
        email,
        password: hashedPassword,
    });

    try {
        await user.save();
        res.status(201).json({
            message: 'User created',
        });
    } catch (err) {
        res.status(500).json({
            msg: err
        });
    }
})

// Login User
app.post('/auth/user', async (req, res) => {
    const { email, password } = req.body;

    // Validation
    if (!email) {
        return res.status(422).json({ msg: 'Email is required' });
    }
    if (!password) {
        return res.status(422).json({ msg: 'Password is required' });
    }

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(422).json({ msg: 'User does not exist' });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(422).json({ msg: 'Password is incorrect' });
    }

    // Create and assign token
    try {
        const secret = process.env.SECRET
        const token = jwt.sign(
            {
                id: user._id
            },
            secret,
        )

        res.status(200).json({ msg: 'User logged in', token });

    }
    catch (err) {
        console.error(err);

        res.status(500).json({
            msg: 'Login failed!'
        });
    }
})

// Logout User
app.post('/auth/logout', async (req, res) => {
    
    try{
        jwt.logout(req, res);

        res.status(200).json({
            message: 'Logout'
        })
    }
    catch
    {
        return res.status(404).json({
            message: 'Logout failed'
        })
    }
})

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        app.listen(URLBase)
        console.log(`Connected to the database at port ${URLBase}`)
    })
    .catch(err => console.log(err))
