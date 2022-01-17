const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = require('express').Router()

// -----------
// Basicos
// -----------

// Function to test token
checkToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}

// Open Route for communication test
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    })
})

// Route get all users
router.get('/users', checkToken, (req, res) => {

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

// -----------
// Verificação
// -----------

// Function to return if user logged
router.get('/verifytoken', checkToken, (req, res) => {
    res.status(200).json({
        auth: true,
        message: 'Token is valid'
    })
})

// Login
router.post('/auth/user', async (req, res) => {
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
router.post('/userlogged', checkToken, (req, res) => {
    const { token } = req.body;

    if (token == "null") {
        return res.status(200).json({
            token: token
        })
    } else {
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

// Verify Tags in User
router.post('/verifytag', checkToken, (req, res) => {
    const { tag, token } = req.body;

    if (token == "null") {
        return res.status(200).json({
            token: token
        })
    } else {
        decoded = jwt.verify(token, process.env.SECRET)
    }

    User.findById(decoded.id)
        .then(user => {
            if (user.tags.includes(tag)) {
                res.status(200).json({ res: true })
            } else {
                res.status(200).json({ res: false })
            }
        })
        .catch(err => {
            res.status(500).json({ res: err })
        })
})

// -----------
// Gestão de usuaŕios
// -----------

// Register User
router.post('/auth/register', async (req, res) => {

    const {
        id,
        name,
        email,
        idade,
        born,
        telephone,
        office,
        department,
        tags,
        password,
        confirmpassword } = req.body

    // Validation
    if (!id || !name || !email || !born || !telephone || !office || !department || !tags || !password || !confirmpassword) {
        return res.status(400).json({
            message: 'Please, fill all fields:' +
                'id, ' + 'name, ' + 'email, ' + 'born, ' + 'telephone, ' + 'office, ' + 'department, ' + 'tags, ' + 'password'
        })
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

    // Calculando idade
    const age = Math.floor((new Date() - new Date(born)) / 31536000000);

    // Create User
    const user = new User({
        id,
        name,
        email,
        idade: age,
        born,
        telephone,
        office,
        department,
        tags,
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

// Delete User
router.post('/auth/delete', async (req, res) => {

    message = await User.findByIdAndDelete(req.body.id)
        .then(() => {
            res.status(200).json({
                message: 'User deleted'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

// Update User
router.post('/auth/update/:id', async (req, res) => {

    const {
        id,
        name,
        email,
        born,
        telephone,
        office,
        department,
        tags} = req.body

    // Calculando idade
    born? age = Math.floor((new Date() - new Date(born)) / 31536000000): age = User.findById(req.params.id).idade

    // Update User
    const user = await User.findByIdAndUpdate(req.params.id, {
        id: id,
        name: name,
        email: email,
        idade: age,
        born: born,
        telephone: telephone,
        office: office,
        department: department,
        tags: tags,
    }, { new: true })
        .then(() => {
            res.status(200).json({
                message: 'User updated'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

router.post('/auth/update/password/:id', async (req, res) => {

    const {
        password,
        confirmpassword } = req.body

    // Validation
    if (!password || !confirmpassword) {
        return res.status(400).json({
            message: 'Please, fill all fields:' +
                'password, ' + 'confirmpassword'
        })
    }

    if (password !== confirmpassword) {
        return res.status(422).json({ msg: 'Password does not match' });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update User
    const user = await User.findByIdAndUpdate(req.params.id, {
        password: hashedPassword,
    }, { new: true })
        .then(() => {
            res.status(200).json({
                message: 'User updated'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router;