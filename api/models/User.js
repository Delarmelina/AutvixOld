const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: String,
    email: String,
    office: String,
    password: String,
});

module.exports = User;