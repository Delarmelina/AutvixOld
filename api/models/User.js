const mongoose = require('mongoose');

const User = mongoose.model('User', {
    id: Number,
    name: String,
    email: String,
    idade: Number,
    born: Date,
    telephone: String,
    office: String,
    department: String,
    tags: [String],
    password: String,
});

module.exports = User;