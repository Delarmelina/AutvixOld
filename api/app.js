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
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token')
    next();
});

// Models
const User = require('./models/user');

// Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    })
})

// Open Route - Users List
app.get('/users', checkToken, (req, res) => {

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
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}

app.get('/verifytoken', checkToken, (req, res) => {
    res.status(200).json({
        auth: true,
        message: 'Token is valid'
    })
})

// Register User
app.post('/auth/register', async (req, res) => {

    const { name, email, password, confirmpassword, office } = req.body

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

    if (!office) {
        return res.status(422).json({ msg: 'Office is required' });
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
        office,
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
            { expiresIn: '1h' }
        )

        return res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token // este token é para guardar!
        });
    }
    catch (err) {
        console.error(err);

        res.status(500).json({
            msg: 'Login failed!'
        });
    }
})

// Get User By Token
app.post('/userlogged', checkToken, (req, res) => {
    const { token } = req.body;

    if (token == "null") {
        return res.status(200).json({
            token: token
        })
    }else{
        decoded = jwt.verify(token, process.env.SECRET)
    }
    
    User.findById(decoded.id)
        .then(user => {
            user.password = undefined
            res.status(200).json({
                user
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        app.listen(URLBase)
        console.log(`Connected to the database at port ${URLBase}`)
    })
    .catch(err => console.log(err))
